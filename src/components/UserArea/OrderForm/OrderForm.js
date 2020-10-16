import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import TopBar from '../../Dashboard/Dashboard/TopBar';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';


const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;
    const { title } = useParams();
    const history = useHistory()

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://limitless-tundra-47243.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order has been send successfully.');
                    history.push("/orderList");
                }
            })
    }

    return (

        <div class="d-flex" id="wrapper">
            <Sidebar></Sidebar>
            <div id="page-content-wrapper">
                <TopBar></TopBar>
                <div className="container" style={{ background: '#F4F7FC' }}>
                    <div className="p-5">
                        <div className="bg-white p-4">
                            <h2 className="mt-0 text-center">Add Order</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="name" className="form-control" value={name} readonly="true" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="email" className="form-control" value={email} readonly="true" />
                                    {errors.email && <span className="text-danger">This field is required</span>}

                                </div>

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="serviceName" className="form-control" defaultValue={title} readonly="true" />
                                    {errors.serviceName && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <textarea type="text" ref={register({ required: true })} name="details" className="form-control" cols="30" rows="6" placeholder="Project Details"></textarea>
                                    {errors.details && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="number" ref={register({ required: true })} name="price" className="form-control" placeholder="Price" />
                                            {errors.price && <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="col">
                                            <input type="file" className="custom-file-input" name="projectFile" id="projectFile" />
                                            <label className="custom-file-label" for="projectFile">Choose file</label>
                                            <span className="text-warning">*Optional</span>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" ref={register({ required: true })} name="status" hidden="true" value="Pending" />
                                <button type="submit" class="btn btn-dark" >Send</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;