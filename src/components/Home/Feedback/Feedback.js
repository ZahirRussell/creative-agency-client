import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {

    
    const [feedback,setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tundra-47243.herokuapp.com/feedback')
        .then(res => res.json())
        .then(result => setFeedback(result))
    },[])
    
    return (
        <section>
            <div className="container text-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <h1 className="mb-5">Client <span style={{ color: '#7AB259' }}>Feedback</span></h1>

            <div className="row">
                {
                    feedback.map(fd => <FeedbackCard feedback={fd} key={fd.id}></FeedbackCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default Feedback;