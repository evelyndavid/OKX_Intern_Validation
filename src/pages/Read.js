// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form } from 'react-bootstrap'; 
// import axios from 'axios';
// import './Table.css';

// export default function Read() {
//     const [APIData, setAPIData] = useState([]);
//     const [editData, setEditData] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         axios.get('https://666fc1b60900b5f87248200e.mockapi.io/Login')
//             .then((response) => {
//                 console.log("Fetched Data: ", response.data);
//                 setAPIData(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data: ", error);
//             });
//     }, []);

//     const handleEditClick = (data) => {
//         setEditData(data);
//         setShowModal(true);
//     }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditData({ ...editData, [name]: value });
//     }

//     const onDelete = (id) => {
//         axios.delete(`https://666fc1b60900b5f87248200e.mockapi.io/Login/${id}`)
   
// }

//     const handleUpdate = () => {
//         axios.put(`https://666fc1b60900b5f87248200e.mockapi.io/Login/${editData.id}`, editData)
//             .then((response) => {
//                 console.log("Updated Data: ", response.data);
//                 setAPIData(APIData.map(item => (item.id === editData.id ? response.data : item)));
//                 setEditData(null);
//                 setShowModal(false);
//             })
//             .catch((error) => {
//                 console.error("Error updating data: ", error);
//             });
//     }

//     const handleClose = () => {
//         setEditData(null);
//         setShowModal(false);
//     }

//     return (
//         <div className="table-container">
//             <Table striped bordered hover className="custom-table">
//                 <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Password</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {APIData.map((data, index) => (
//                         <tr key={index}>
//                             <td>{data.Email_id}</td>
//                             <td>{data.Password}</td>
//                             <td>
//                                 <Button variant="primary" onClick={() => handleEditClick(data)}>Update</Button>
//                             </td>
//                             <td>
//                                 <Button onClick={() => onDelete(data.id)}>Delete</Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Data</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {editData && (
//                         <Form>
//                             <Form.Group controlId="formEmail">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     name="Email_id"
//                                     value={editData.Email_id}
//                                     onChange={handleInputChange}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     name="Password"
//                                     value={editData.Password}
//                                     onChange={handleInputChange}
//                                 />
//                             </Form.Group>
//                         </Form>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//                     <Button variant="primary" onClick={handleUpdate}>Save</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Table.css';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://666fc1b60900b5f87248200e.mockapi.io/Login')
            .then((response) => {
                console.log("Fetched Data: ", response.data);
                setAPIData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const handleEditClick = (data) => {
        navigate('/update', { state: { data } });
    }


    const handleDelete = (id) => {
        axios.delete(`https://666fc1b60900b5f87248200e.mockapi.io/Login/${id}`)
            .then(() => {
                setAPIData(APIData.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting data: ", error);
            });
    }



    return (
        <div className="table-container">
            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEditClick(data)}>Update</Button>
                            </td>
                            <td>
                                 <Button variant="danger" onClick={() => handleDelete(data.id)} >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
