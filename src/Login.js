import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

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
            props.setIsLoggedIn(true)
            history.push("/submissions")
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <div className="LoginPage">
            <div className="LoginText">
                <h2>Welcome</h2>
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
            <div className="LoginImage" style={{backgroundImage: "url(/pictures/frida.jpg)"}}/>            
        </div>        
    )
}

export default Login;