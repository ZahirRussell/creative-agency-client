import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div id="sidebar-wrapper">
            <div class="sidebar-heading"><img src={logo} alt="" style={{ height: '50px' }} /></div>
            <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action">
                    <Link to="/" >
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </a>
                {!isAdmin && <div>
                    <a href="#" class="list-group-item list-group-item-action">
                        <Link to="/orderList" >
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <Link to="addReview" >
                            <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                        </Link>
                    </a>
                </div>}
                {isAdmin && <div>
                    <a href="#" class="list-group-item list-group-item-action ">
                        <Link to="servicesList" >
                            <FontAwesomeIcon icon={faHandsHelping} /> <span>Service List</span>
                        </Link>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <Link to="addService" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <Link to="makeAdmin" >
                            <FontAwesomeIcon icon={faUserLock} /> <span>Make Admin</span>
                        </Link>
                    </a>
                </div>}
            </div>
        </div>
    );
};

export default Sidebar;