import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Clients from '../Clients/Clients';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../ManageServices/Services';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <ContactForm></ContactForm> 
            <Footer></Footer>
        </div>
    );
};

export default Home;