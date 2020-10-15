import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Clients = () => {
    return (
        <section className="container mt-5 text-center">
                <img src={slack} alt="" style={{ height: '40px' }} className="ml-5" />
                <img src={google} alt="" style={{ height: '40px' }} className="ml-5" />
                <img src={uber} alt="" style={{ height: '40px' }} className="ml-5" />
                <img src={netflix} alt="" style={{ height: '40px' }} className="ml-5" />
                <img src={airbnb} alt="" style={{ height: '40px' }} className="ml-5" />
        </section>
    );
};

export default Clients;