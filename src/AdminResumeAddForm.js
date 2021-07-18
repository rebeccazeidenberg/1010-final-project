import React, { useState, useEffect } from "react";
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';


function AdminResumeAddForm(props) {

    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImage] = useState("");

    const clearForm = () => {
        console.log("clearForm")
        setTitle("")
        setDesc("")
        setImage("")
    }

    const createHandler = () => {
        const data = {
            title,
            description,
            image
        }
        fetch(`${process.env.REACT_APP_API}/resume`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log("Success:", json);
            clearForm()
            props.fetchResumeItems()
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <div className="CreateForm">
            <h2>Add Resume Item</h2>
            <Container>
                <Row>
                    <Col>
                        <Label for="Title">Title</Label>
                        <Input type="text" name="title" id="Title" value={title} onChange={(event) => {setTitle(event.target.value)}} />
                    </Col>
                    <Col>
                        <Label for="Description">Description</Label>
                        <Input type="text" name="description" id="Description" value={description} onChange={(event) => {setDesc(event.target.value)}}/>
                    </Col>
                    <Col>
                        <Label for="ImageURL">Image URL</Label>
                        <Input type="text" name="image" id="ImageURL" value={image} onChange={(event) => {setImage(event.target.value)}}/>
                   </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="secondary" onClick={createHandler}>Add Item</Button>{' '}
                    </Col>
                </Row>
            </Container>       
        </div>
    )
}

export default AdminResumeAddForm