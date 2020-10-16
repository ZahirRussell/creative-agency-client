import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';

const ServiceForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('https://limitless-tundra-47243.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Service Added Successfully!')
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
                            <h2 className="mt-0 text-center">Add Service</h2>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <div className="form-row">
                                        <div class="col">
                                            <label htmlFor="">Service Title</label>
                                            <input type="text" ref={register({ required: true })} name="title" className="form-control" placeholder="Enter title" />
                                            {errors.title && <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Icon</label>
                                            <input type="file" class="form-control btn btn-info" name="projectFile" id="projectFile" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" placeholder="Enter Description"></textarea>
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="row d-flex justify-content-end">
                                    <button type="submit" class="btn btn-success" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceForm;