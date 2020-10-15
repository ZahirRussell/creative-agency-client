import React, { useContext } from 'react';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LoginManager';
import "firebase/auth";
import './Login.css';

import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';

import './Login.css';

const Login = () => {

    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }

    const handleResponse = (res, redirect) =>{
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }

    return (
        <div className="text-center">
            <div className="mt-5 mb-5">
                <a class="navbar-brand" href="/"><img src={logo} alt="" style={{ height: '50px' }} /></a>
            </div>
           <div className="login-form">

                <h3 className="mb-4">Login with</h3>
                <button onClick={googleSignIn} className="btn btn-outline-secondary rounded-pill">
                    <img src={googleIcon} style={{ height: '40px' }} alt="" /> Continue with Google
                </button>
                <p>Don’t have an account? <a href="" onClick={googleSignIn}>Create an account</a></p>


            </div>
        </div>
    );
};

export default Login;