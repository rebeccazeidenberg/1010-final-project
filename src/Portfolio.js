import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function Portfolio() {

    const [portfolio, setPortfolio] = useState([]);
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

    return (
        <div className="Portfolio">
            <h1>Portfolio</h1>
            <div className="MapDiv">
                {portfolio.map((p) => (
                    <div className="PortContent">
                        <div className="PortfolioPics"><img src={p.image}></img></div> 
                        <div className="PortfolioText">
                            {p.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;