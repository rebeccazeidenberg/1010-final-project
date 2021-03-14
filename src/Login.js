import React, { useState } from "react";
import Cookies from 'js-cookie';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useState(Cookies.get("token"));

    const clickHandler= () => {

        const data = {
            username,
            password
        };  

        fetch("http://localhost:4000/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log("Success:", json);
            Cookies.set("token", json.token);
            setCookie(json.token);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <div>
            <h2>Login</h2>
            <label>
                Username
                <input type="text" onChange={(event) => {setUsername(event.target.value)}}/>
            </label>

            <label>
                Password
                <input type="password" onChange={(event) => {setPassword(event.target.value)}}/>
            </label>

            <button onClick={clickHandler}>
                Login
            </button>
        </div>        
    )
}

export default Login;