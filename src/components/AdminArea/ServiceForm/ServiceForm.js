import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../Dashboard/Dashboard/Sidebar';
import TopBar from '../../Dashboard/Dashboard/TopBar';

const ServiceForm = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory()

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://limitless-tundra-47243.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added Successfully!')
                history.push("/dashboard");
            })
            .catch(error => {
                console.error(error)
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

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div class="col">
                                            <label htmlFor="">Service Title</label>
                                            <input type="text" onBlur={handleBlur} name="title" className="form-control" required placeholder="Enter title" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="exampleInputPassword1">Icon</label>
                                            <input onChange={handleFileChange} type="file" className="form-control" required id="exampleInputPassword1" placeholder="Picture" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <textarea type="text" onBlur={handleBlur} name="description" className="form-control" required cols="30" rows="6" placeholder="Enter Description"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceForm;