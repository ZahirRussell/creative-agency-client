import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#FBD062' }}>
           <p className="text-center py-5">Copyright &copy;Techlore LLC. All rights reserved. {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;