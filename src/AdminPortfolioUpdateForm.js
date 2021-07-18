import React, { useState, useEffect } from "react";
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';
import Cookies from 'js-cookie';


function AdminPortfolioUpdateForm(props) {

    const [description, setDescription] = useState(props.portfolioItem.description);
    const [image, setImage] = useState(props.portfolioItem.image);
 
    const updateHandler = () => {
        const bearer = "Bearer " + Cookies.get("token");
        const data = {
            description,
            image
        }

        fetch(`${process.env.REACT_APP_API}/portfolio/${props.portfolioItem.id}`, {
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
            props.fetchPortfolioItems()
        })        
    }

    
    return (
        <div>
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
                        <Button color="secondary" onClick={updateHandler}>Update Item</Button>{' '}
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default AdminPortfolioUpdateForm