import React from 'react';

const Feedback = ({ feedback }) => {

    const { photo, name, designation, description } = feedback;
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="mt-3 mb-1 d-flex  align-items-center">
                            <img className="mx-3 rounded-circle" src={photo} alt="" width="50" />
                            <div className="font-weight-bold text-left">
                                <h4>{name}</h4>
                                <h5>{designation}</h5>
                            </div>
                        </div>
                <div className="card-body">
                     <p className="text-secondary text-justify">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;