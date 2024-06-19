
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Table.css';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://666fd32b0900b5f8724856d7.mockapi.io/SignUp')
            .then((response) => {
                console.log("Fetched Data: ", response.data);
                setAPIData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const handleEditClick = (data) => {
        navigate('/update2', { state: { data } });
    }


    const handleDelete = (id) => {
        axios.delete(`https://666fd32b0900b5f8724856d7.mockapi.io/SignUp/${id}`)
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
                        <th>Confirm Password</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>{data.confirmPassword}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEditClick(data)}>Update</Button>
                            </td>
                            <td>
                                 <Button variant="secondary" onClick={() => handleDelete(data.id)} >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
