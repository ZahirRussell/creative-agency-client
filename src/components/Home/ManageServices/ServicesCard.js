import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesCard.css';


const ServicesCard = ({ service }) => {

    const { image, title, description } = service;
    const history = useHistory();
    const handleUserOrders = (title)=>{
        const url = `/makeOrder/${title}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 col-sm-6" onClick={() =>handleUserOrders(title)}>
            <div className="card service-card">
                <div className="card-body">
                    <img src={image} alt="" style={{ height: '50px' }} />
                    <h4 className="text-dark">{title}</h4>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;