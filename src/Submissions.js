import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import Entries from './Entries';


function Submissions() {

    const [entries, setEntries] = useState ([]);


    useEffect(() => {
        const bearer = "Bearer " + Cookies.get("token");
        console.log(bearer);
        fetch("process.env.REACT_APP_API/contact_form/entries", {
            method: "GET",
            withCredentials: true,
            // credentials: "include",
            headers: {
                "Authorization": bearer
            }
        })
        .then(response => response.json())
        .then((data) => {
            setEntries(data);
        })
    }, []);

    return (
        <div className="SubmissionsPage">
            <h3>Submissions List</h3>
            <Entries entries={entries}/>

        </div>
        // <div>
        // {Cookies.get("token") ? submissionsList : <Redirect to='/login' /> }
        // </div>
      
        // <div>


        //     <h2>Submissions</h2>
        //     {submissionsList}

        // </div>
    )
}

export default Submissions;