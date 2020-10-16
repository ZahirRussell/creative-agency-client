import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesCard.css';


const ServicesCard = ({ service }) => {

    // const { image, title, description } = service;
    console.log(service);
    const history = useHistory();
    const handleUserOrders = (title) => {
        const url = `/makeOrder/${title}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 col-sm-6" onClick={() => handleUserOrders(service.title)}>
            <div className="card service-card">
                <div className="card-body">
                    {
                        service.image ? <img alt="" style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} />
                            :
                            <img style={{ height: '50px' }} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${service.img}`} alt="" />
                    }
                    <h4 className="text-dark">{service.title}</h4>
                    <p className="text-secondary">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;