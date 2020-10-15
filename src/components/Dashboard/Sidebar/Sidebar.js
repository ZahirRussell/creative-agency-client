import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faCartArrowDown, faComments, faList, faUserLock, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

import logo from '../../../images/logos/logo.png';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <a class="navbar-brand m-4 " href="/dashboard"><img src={logo} alt="" style={{ height: '50px' }} /></a>

                    <li>
                        <Link to="/" >
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                {!isAdmin && <div>
                    {/* <li>
                    <Link to="/makeOrder" >
                        <FontAwesomeIcon icon={faCartArrowDown} /> <span>Order</span>
                    </Link>
                    </li> */}                    
                    <li>
                        <Link to="/orderList" >
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="addReview" >
                            <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                        </Link>
                    </li>
                    
                </div>}

                {isAdmin && <div>
                    <li>
                        <Link to="servicesList" >
                            <FontAwesomeIcon icon={faHandsHelping} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="addService" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="makeAdmin" >
                            <FontAwesomeIcon icon={faUserLock} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;