import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';


function About() {

    const [resume, setResume] = useState([]);
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

    return ( 
  
        <div className="AboutPage">
            {resume.map((r) => (
                <div>
                    <div className="AboutResumeInfo">
                        <div className="AboutText">
                            <div className="AboutTitle"><h2>{r.title}</h2></div>
                            <div className="AboutDesc">{r.description}</div>                            
                        </div>
                        <div className="AboutPics"><img src={r.image}></img></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default About;