import React, { useState, useEffect } from "react";
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';


function AdminPortfolioAddForm(props) {

    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const clearForm = () => {
        console.log("clearForm")
        setDescription("")
        setImage("")
    }

    const createHandler = () => {
        const data = {
            description,
            image
        }
        fetch(`${process.env.REACT_APP_API}/portfolio`, {
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
            props.fetchPortfolioItems()
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <div className="CreateForm">
        <h2>Add Portfolio Item</h2>
        <Container>
            <Row>
                <Col>
                    <Label for="Description">Description</Label>
                    <Input type="text" name="description" id="Description" value={description} onChange={(event) => {setDescription(event.target.value)}} />
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
)}

export default AdminPortfolioAddForm