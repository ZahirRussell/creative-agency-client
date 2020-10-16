import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';

const ReviewForm = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, photo } = loggedInUser;

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        // insert review into database
        fetch('https://limitless-tundra-47243.herokuapp.com/addFeedback', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    console.log('Data', success);
                    alert('Review post successfully.')
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
                            <h2 className="mt-0 text-center">Review Item</h2>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                                <input type="text" ref={register({ required: true })} name="photo" hidden="true" value={photo} />

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="name" className="form-control" value={name} readonly="true" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="designation" className="form-control" placeholder="Company’s name, Designation" />
                                    {errors.designation && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" placeholder="Description"></textarea>
                                    {errors.description && <span className="text-danger">This field is required</span>}

                                </div>

                                <button type="submit" className="btn btn-dark" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;