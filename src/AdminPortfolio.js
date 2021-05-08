import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Button } from 'reactstrap';
import AdminPortfolioAddForm from './AdminPortfolioAddForm';
import AdminPortfolioUpdateForm from './AdminPortfolioUpdateForm';

function AdminPortfolio() {

    const [portfolio, setPortfolio] = useState([]);
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        fetchPortfolioItems()
    }, []);

    const fetchPortfolioItems = () => {
        const bearer = "Bearer " + Cookies.get("token");
        return fetch("/portfolio", {
            method: "GET",
            withCredentials: true,
            headers: {
                "Authorization": bearer
            }
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setPortfolio(data);
        })
    }

    const updateHandler = (item) => {
        setUpdateId(item.id)
    }

    const deleteHandler = (id) => {
        const bearer = "Bearer " + Cookies.get("token");
        fetch(`http://localhost:4000/portfolio/${id}`, {
            method: "DELETE",
            withCredentials: true,
            headers: {
                "Authorization": bearer,
            },
        })
        .then(() => {
            fetchPortfolioItems()
        })
    }

    return (
        <div>
            <h1>Portfolio Items</h1>
            <div>
                {portfolio.map((r, i) => {
                return r.id === updateId ? 
                <AdminPortfolioUpdateForm fetchPortfolioItems={fetchPortfolioItems} portfolioItem={r} setUpdateId={setUpdateId}/>
                :
                (
                    <div>
                        <div className="PortItems">
                            <div>{r.description}</div>
                            <div className="PortPics">
                                <img src={r.image}></img>
                            </div>
                            <div className="Edit">
                                <Button color="primary" onClick={() => {updateHandler(r)}}>Edit</Button>{' '}
                                <Button color="secondary" onClick={() => {deleteHandler(r.id)}}>Delete</Button>{' '}
                            </div>
                        </div>
                    </div>
                )}
            )}
            </div>
            <div>
                <AdminPortfolioAddForm fetchPortfolioItems={fetchPortfolioItems}/>
            </div>
        </div>
    )
}

export default AdminPortfolio