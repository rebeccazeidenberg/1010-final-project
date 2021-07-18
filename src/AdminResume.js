import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { Button } from 'reactstrap';
import AdminResumeAddForm from './AdminResumeAddForm';
import AdminResumeUpdateForm from './AdminResumeUpdateForm'


function AdminResume() {

    const [resume, setResume] = useState([]);
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        fetchResumeItems()
    }, []);

    const fetchResumeItems = () => {
        // const bearer = "Bearer " + Cookies.get("token");
        return fetch(`${process.env.REACT_APP_API}/resume`, {
            method: "GET",
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setResume(data);
        })
    }

    const updateHandler = (item) => {
        setUpdateId(item.id)
    }

    const deleteHandler = (id) => {
        const bearer = "Bearer " + Cookies.get("token");
        fetch(`${process.env.REACT_APP_API}/resume/${id}`, {
            method: "DELETE",
            withCredentials: true,
            headers: {
                "Authorization": bearer,
            },
        })
        .then(() => {
            fetchResumeItems()
        })
    }

    return (
        <div>
            <h1>Resume Items</h1>
            <div>
            {resume.map((r, i) => {
                return r.id === updateId ? 
                <AdminResumeUpdateForm fetchResumeItems={fetchResumeItems} resumeItem={r} setUpdateId={setUpdateId}/>
                :
                (
                    <div>
                        <div className="ResItems">
                            <div>{r.title}</div>
                            <div>{r.description}</div>
                            <div className="ResPics">
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
                <AdminResumeAddForm fetchResumeItems={fetchResumeItems}/>
            </div>
        </div>
    )
}


export default AdminResume