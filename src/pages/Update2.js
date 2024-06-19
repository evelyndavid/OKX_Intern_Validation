import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap'; 
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
    const location = useLocation();
    const navigate = useNavigate();
    const [editData, setEditData] = useState(location.state.data);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    }

    const handleUpdate = () => {
        axios.put(`https://666fd32b0900b5f8724856d7.mockapi.io/SignUp/${editData.id}`, editData)
            .then((response) => {
                console.log("Updated Data: ", response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error("Error  data: ", error);
            });
    }

    const handleClose = () => {
        navigate('/');
    }

    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={editData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={editData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={editData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleUpdate}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}



