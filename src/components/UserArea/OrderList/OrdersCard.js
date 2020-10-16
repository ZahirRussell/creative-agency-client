import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css';

const OrdersCard = (props) => {
    const { _id, serviceName, details, status } = props.order;
    return (
        // <div className="col-md-4">
        //     <div className="card" style={{width: 20 + 'rem', marginTop:'20px'}}>           
        //          <div className="row">
        //              <div className="col-md-6">
        //             {/* <img style={{height:'223px'}} className="card-img-top" src={require(`../../images/NoImage.jpg`)} alt="" />                 
        //                         <hr></hr> */}
        //              </div>
        //              <div className="col-md-6">
        //              <span class="badge badge-pill badge-warning"> {status}</span>
        //              </div>
        //          </div>
        //         <div className="card-body">
        //             <h2 className="card-title">{serviceName}</h2>
        //             <strong>{details}</strong>
        //             <button type="submit" className="btn-danger rounded-pill"  onClick={() => props.removeUserOrder(_id)}>
        //                                     <FontAwesomeIcon icon={faTrash}/> 
        //                                     &nbsp; Cancel
        //                     </button> 
        //         </div>
        //     </div>            
        // </div> 


        <div className="col-md-4 col-sm-6 col-xs-12">
            <div class="square-card">
                <div class="card-header">
                    <div class="card-header_overlay">
                        <div className="row">
                            {
                                status === 'Pending'
                                &&
                                <div style={{ backgroundColor: '#FFE3E3', borderRadius: '6px' }} className="p-2 px-4 d-inline-block float-right ml-auto">
                                    <span style={{ color: '#FF4545' }}>{status}</span>
                                </div>

                            }
                            {
                                status === 'Ongoing'
                                &&
                                <div style={{ backgroundColor: '#FFF8DC', borderRadius: '6px' }} className="p-2 px-4 d-inline-block float-right ml-auto">
                                    <span style={{ color: '#E9AB17' }}>{status}</span>
                                </div>
                            }
                            {
                                status === 'Done'
                                &&
                                <div style={{ backgroundColor: '#C6FFE0', borderRadius: '6px' }} className="p-2 px-4 d-inline-block float-right ml-auto">
                                    <span style={{ color: '#009444' }}>{status}</span>
                                </div>
                            }
                            {/* <div className="col-md-8">
                            </div>
                            <div className="col-md-2">
                                 {
                                    status === "Pending"
                                    &&
                                    <span class="badge badge-pill badge-warning">{status} </span>
                                }
                                {
                                    status === "Ongoing"
                                    &&
                                    <span class="badge badge-pill badge-info">{status} </span>
                                }
                                {
                                    status === "Done"
                                    &&
                                    <span class="badge badge-pill badge-success">{status} </span>
                                }                               

                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div class="card-title">
                        <h5 className="card-title">{serviceName}</h5>
                    </div>
                    <strong>{details}</strong>
                    <div class="p-3">
                        <button type="submit" className="btn-danger rounded-pill" onClick={() => props.removeUserOrder(_id)}>
                            <FontAwesomeIcon icon={faTrash} />
                                    &nbsp; Cancel
                            </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default OrdersCard;