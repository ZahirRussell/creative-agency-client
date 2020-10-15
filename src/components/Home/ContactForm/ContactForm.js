import React from 'react';


const ContactForm = () => {
    return (
        <section style={{ height: '500px', background: '#FBD062' }} className="row">
            <div className="col-md-5 offset-md-1 mt-5">
                <h1>Let us handle your <br /> project, professionally.</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa minima amet perferendis rerum dolor quis.</p>
            </div>
            <div className="col-md-5 mt-5">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your email address " />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name / company’s name " />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" cols="30" rows="10" placeholder="Your message "></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark"> Send </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default ContactForm;