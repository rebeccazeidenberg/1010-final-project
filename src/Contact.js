import React, { useState } from "react";



function Contact() {   
        const [name, setName] = useState(""); 
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");
        const [content, setContent] = useState("");


        const clickHandler= () => {

            const data = {
                name,
                phoneNumber,
                email,
                content
            }

            fetch("http://localhost:4000/contact_form/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => {
                console.log("Success:", json);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }

    
    return (
        <div>
            <h2>Contact</h2>
            <label>
                Name
                <input type="text" onChange={(event) => {setName(event.target.value)}} />
            </label>

            <label>
                Phone Number
                <input type="text" onChange={(event) => {setPhoneNumber(event.target.value)}}/>
            </label>

            <label>
                Email
                <input type="email" onChange={(event) => {setEmail(event.target.value)}}/>
            </label>

            <label>
                Content
                <input type="text" onChange={(event) => {setContent(event.target.value)}}/>
            </label>

            <button onClick={clickHandler}>
                Submit
            </button>

        </div>
    )
}

export default Contact;