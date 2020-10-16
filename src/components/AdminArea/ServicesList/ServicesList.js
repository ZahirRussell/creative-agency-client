import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';

const ServicesList = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/orders')
            .then(res => res.json())
            .then(result => setAllOrders(result))
    }, [])

    const handleStatus = (e, id) => {
        const newStatus = e.target.value
        const data = { id, newStatus }

        fetch(`https://limitless-tundra-47243.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    window.alert("Status updated successfully")
                } else {
                    window.alert("Error in update")
                }
            })
    }

    const handleDelete = (orderId) => {
        const newOrder = allOrders.filter(ev => ev._id !== orderId);
        setAllOrders(newOrder);
        removeFromDatabase(orderId);
    }

    const removeFromDatabase = (id) => {
        fetch(`https://limitless-tundra-47243.herokuapp.com/deleteUserOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    return (
        <div class="d-flex" id="wrapper">
            <Sidebar></Sidebar>
            <div id="page-content-wrapper">
                <TopBar></TopBar>
                <div className="container" style={{ background: '#F4F7FC' }}>
                    <div className="p-5">
                        <div className="bg-white p-4">
                            <h2 className="mt-0 text-center">User's Services</h2>
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
                                                <td>
                                                    <select onChange={(e) => handleStatus(e, ev._id)} className="custom-select mr-5">
                                                        {
                                                            ev.status === 'Pending'
                                                            &&
                                                            <>
                                                                <option value="Pending" defaultValue style={{ color: '#FF0000' }}>
                                                                    Pending
                                                                            </option>
                                                                <option value="Ongoing">On going</option>
                                                                <option value="Done">Done</option>
                                                            </>
                                                        }
                                                        {
                                                            ev.status === 'Ongoing'
                                                            &&
                                                            <>
                                                                <option value="Ongoing" defaultValue style={{ color: '#FFA500' }}>
                                                                    On going
                                                                            </option>
                                                                <option value="Pending">Pending</option>
                                                                <option value="Done">Done</option>
                                                            </>
                                                        }
                                                        {
                                                            ev.status === 'Done'
                                                            &&
                                                            <>
                                                                <option value="Done" defaultValue style={{ color: '#008000' }}>
                                                                    Done
                                                                            </option>
                                                                <option value="Ongoing">On going</option>
                                                                <option value="Pending">Pending</option>
                                                            </>
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <span className="text-danger" onClick={() => handleDelete(ev._id)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </span>
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
        </div>
    );
};

export default ServicesList;