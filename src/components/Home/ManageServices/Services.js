import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';


const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/services')
        .then(res => res.json())
        .then(result => setServices(result))
    },[])
    return (
        <div className="container text-center" style={{ marginTop: '150px', marginBottom: '50px' }}>
            <h1 className="mb-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>

            <div className="row">
                {
                    services.map(service => <ServicesCard service={service} key={service.id}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;