import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';
import './Login.css';

const Login = () => {
	document.title = "CA || Login";
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();

	const { from } = location.state || { from: { pathname: "/" } };

	// Initialize Firebase
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const newUser = {
					name: displayName,
					email,
					photoURL,
				};
				console.log(result.user);
				setLoggedInUser(newUser);
				//storeAuthToken();
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// const storeAuthToken = () => {
	// 	firebase
	// 		.auth()
	// 		.currentUser.getIdToken(/* forceRefresh */ true)
	// 		.then(function (idToken) {
	// 			sessionStorage.setItem("token", idToken);
	// 			history.replace(from);
	// 		})
	// 		.catch(function (error) {
	// 			// Handle error
	// 		});
	// };


	return (
		<div className="text-center">
			<div className="mt-5 mb-5">
				<a class="navbar-brand" href="/"><img src={logo} alt="" style={{ height: '50px' }} /></a>
			</div>
			<div className="login-form">

				<h3 className="mb-4">Login with</h3>
				<button onClick={handleGoogleSignIn} className="btn btn-outline-secondary rounded-pill">
					<img src={googleIcon} style={{ height: '40px' }} alt="" /> Continue with Google
                </button>
				<p>Don’t have an account? <a href="" onClick={handleGoogleSignIn}>Create an account</a></p>


			</div>
		</div>
	);
};

export default Login;