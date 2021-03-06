import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://limitless-tundra-47243.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    console.log(data);
                    alert('Admin Added Successfully!')
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
                            <h2 className="mt-0">New Admin</h2>

                            <form className="p-3 col-md-6" onSubmit={handleSubmit(onSubmit)}>
                                <h5>Email</h5>
                                <div class="input-group mb-3">
                                    <input class="form-control" type="email" ref={register({ required: true })} name="email" placeholder="john@gmail.com" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-primary" type="submit">Submit</button>
                                    </div>
                                </div>
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;