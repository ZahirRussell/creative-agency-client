import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
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
        <section>

            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 offset-md-1 mt-5">
                        {!isAdmin && <div class="alert alert-info" role="alert">
                            <h4 class="alert-heading">Well done!</h4>
                            <strong>Hi {loggedInUser.name}!</strong>
                            <hr/>
                            <p class="mb-0"> <FontAwesomeIcon icon={faInfoCircle}/>&nbsp;You are in the <mark> Application user role</mark>.
                            So you can only place an order, see your ordered item, review on your order</p>
                        </div>}
                        {isAdmin && <div class="alert alert-info" role="alert">
                            <h4 class="alert-heading">Well done!</h4>
                            <strong>Hi {loggedInUser.name}!</strong>
                            <hr/>
                            <p class="mb-0"> <FontAwesomeIcon icon={faInfoCircle}/>&nbsp;You are in the <mark>Admin role</mark> .
                            So you can add service, see your added service, make another admin to the application.</p>
                        </div>}
                </div>
            </div>

        </section>
    );
};

export default Dashboard;