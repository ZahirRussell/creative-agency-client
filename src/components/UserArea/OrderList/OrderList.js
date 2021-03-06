import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';
import OrdersCard from './OrdersCard';

const OrderList = () => {

    const [userOrders, setUserOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/ordersByEmail?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserOrders(data)
            });
    }, [])

    const removeUserOrder = (orderId) => {
        const newEvent = userOrders.filter(ev => ev._id !== orderId);
        setUserOrders(newEvent);
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
                            <h2 className="mt-0 text-center">Ordered Item</h2>

                            <div class="alert alert-success" role="alert">
                                <h3><FontAwesomeIcon icon={faInfoCircle} />&nbsp;  Hi {loggedInUser.name}! You have: <span class="badge badge-pill badge-primary"> {userOrders.length}</span> orders.</h3>
                            </div>
                            <div className="row">
                                {
                                    userOrders.map(order => <OrdersCard
                                        key={order._id}
                                        removeUserOrder={removeUserOrder}
                                        order={order}></OrdersCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;