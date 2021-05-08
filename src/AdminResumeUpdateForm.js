import React, { useState, useEffect } from "react";
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';
import Cookies from 'js-cookie';


function AdminResumeUpdateForm(props) {

    const [title, setTitle] = useState(props.resumeItem.title);
    const [description, setDesc] = useState(props.resumeItem.description);
    const [image, setImage] = useState(props.resumeItem.image);
 
    const updateHandler = () => {
        const bearer = "Bearer " + Cookies.get("token");
        const data = {
            title,
            description,
            image
        }

        fetch(`http://localhost:4000/resume/${props.resumeItem.id}`, {
            method: "PUT",
            headers: {
                "Authorization": bearer,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(() => {
            props.setUpdateId(null)
            props.fetchResumeItems()
        })        
    }

    return (
        <div>
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
                        <Button color="secondary" onClick={updateHandler}>Update Item</Button>{' '}
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default AdminResumeUpdateForm