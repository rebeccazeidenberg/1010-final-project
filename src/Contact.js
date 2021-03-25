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
        <div className="ContactPage">
            <div className="Portrait" style={{backgroundImage: "url(/pictures/portrait1.jpg)"}}/>
            <div className="ContactForm">
                <h2>Contact</h2>
                <div className="InputBox">
                    <label className="Text">
                        Name
                    </label>
                    <input type="text" onChange={(event) => {setName(event.target.value)}} />
                </div>

                <div className="InputBox">
                    <label className="Text">
                        Phone Number
                    </label>
                    <input type="text" onChange={(event) => {setPhoneNumber(event.target.value)}}/>
                </div>

                <div className="InputBox">
                    <label className="Text">
                        Email
                    </label>
                    <input type="email" onChange={(event) => {setEmail(event.target.value)}}/>
                </div>

                <div className="InputBox">
                    <label className="Text">
                        Type your message here...
                    </label>
                    <textarea name="message" onChange={(event) => {setContent(event.target.value)}}/>
                </div>

                <button onClick={clickHandler}>
                    Contact Us
                </button>
                </div>
                <div className="SideText">
                    <div className="Info">Email</div>
                    <div className="InsideInfo">rebeccaz@message.com</div>

                    <div className="Info">Phone Number</div>
                    <div className="InsideInfo">(555)-123-4567</div>

                    <div className="Info">Location</div>
                    <div className="InsideInfo">Toronto, Canada</div>
                </div>
            </div>
    )
}

export default Contact;