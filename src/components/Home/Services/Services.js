import React, { useEffect, useState } from 'react';
import ServicesCard from '../ManageServices/ServicesCard';

// const services = [
//     {
//         id: 0,
//         image: 'https://i.imgur.com/7G4sl1N.png',
//         title: 'Web & Mobile design',
//         description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
//     },
//     {
//         id: 1,
//         image: 'https://i.imgur.com/EkkUahl.png',
//         title: 'Graphic design',
//         description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
//     },
//     {
//         id: 2,
//         image: 'https://i.imgur.com/5yUhUZQ.png',
//         title: 'Web development',
//         description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
//     },


// ]

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