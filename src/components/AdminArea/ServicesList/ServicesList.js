import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const ServicesList = () => {

    const [allOrders,setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/orders')
        .then(res => res.json())
        .then(result => setAllOrders(result))
    },[])

    const handleDelete = (orderId) => {
        const newOrder = allOrders.filter(ev => ev._id !== orderId);
        setAllOrders(newOrder);
        removeFromDatabase(orderId);
    }

    const removeFromDatabase = (id) =>{
        fetch(`https://limitless-tundra-47243.herokuapp.com/deleteUserOrder/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div className="container" style={{background: '#F4F7FC' }}>               
                <div className="p-5">
                    <div className="bg-white p-5">
                            <h2 className="text-center">Service List</h2>
                                        <table className="table table-responsive pt-3">
                                            <thead className="thead-light"> 
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Service</th>
                                                    <th scope="col">Details</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {
                                                    allOrders.map(ev =>
                                                        <tr key={ev._id}>
                                                            <td>{ev.name}</td>
                                                        <td>{ev.email}</td>
                                                            <td>{ev.serviceName}</td>
                                                            <td>{ev.details}</td>
                                                            <td>{ev.status}</td>
                                                            <td>                                                            
                                                                <button type="button" className="btn-danger rounded-pill" onClick={() => handleDelete(ev._id)}>
                                                                    <FontAwesomeIcon icon={faTrash}/> 
                                                                    &nbsp; Delete
                                                                </button> 
                                                            </td>
                                                        </tr>
                                                        )
                                                }

                                            </tbody>
                                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;