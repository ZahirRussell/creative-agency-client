import React from 'react';
import topHeaderImage from '../../../images/topHeaderImage.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '500px' }} className="row d-flex align-items-center p-2">
           
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ fontSize: 48, fontWeight: 'bold' }}>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa minima amet perferendis rerum dolor quis.</p>
                    <button className="btn btn-dark">Hire us</button>
                </div>
                <div className="col-md-6">
                    <img src={topHeaderImage} alt="" className="img-fluid" />
                </div>
        </main>
    );
};

export default HeaderMain;