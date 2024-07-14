/*
// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google client ID

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login or signup logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
        // Handle successful Google login here
    };

    const handleGoogleLoginFailure = (error) => {
        console.log('Google login failure:', error);
        // Handle failed Google login here
    };

    const handleEmailSignupClick = () => {
        setIsSignup(true);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container">
                <h2>{isSignup ? 'Signup' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='lbl'>{isSignup ? 'Email:' : 'Username:'}</label>
                        <input
                            type={isSignup ? 'email' : 'text'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='lbl'>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='class="pencil-circle"'>
                        {isSignup ? 'Signup' : 'Login'}
                    </button>
                    <div className="signup-links">
                        <span className="psw">
                            Signup using
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{marginLeft: '8px', marginTop:'-5px'}} className='loginlink'>
                                        <FaGoogle style={{ marginRight: '0px', fontSize: '1.2rem' }} />
                                        <span className='txt'>oogle</span>
                                    </button>
                                )}
                            />
                        </span>
                        <span className="psw">
                            Signup using <a href="#email-signup" onClick={handleEmailSignupClick} style={{marginLeft: '8px'}} className='loginlink'>Email</a>
                        </span>
                    </div>
                </form>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
*/
// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const clientId = 'urmiparmar0000@gmail.com'; // Replace with your Google client ID

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login or signup logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
        // Handle successful Google login here
    };

    const handleGoogleLoginFailure = (error) => {
        console.log('Google login failure:', error);
        // Handle failed Google login here
    };

    const handleEmailSignupClick = () => {
        setIsSignup(true);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container" style={{ marginTop: '10px' }}>
                <h2>{isSignup ? 'Signup' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='lbl'>{isSignup ? 'Email:' : 'Username:'}</label>
                        <input
                            type={isSignup ? 'email' : 'text'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='lbl'>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='pencil-circle'>
                        {isSignup ? 'Signup' : 'Login'}
                    </button>
                    <div className="signup-links">
                        <span className="psw">
                            Signup using
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ marginLeft: '8px', marginTop: '-5px' }} className='loginlink'>
                                        <FaGoogle style={{ marginRight: '0px', fontSize: '1.2rem' }} />
                                        <span className='txt'>oogle</span>
                                    </button>
                                )}
                            />
                        </span>
                        <span className="psw">
                            Signup using
                            <Link to="/Register">
                                <a href="#email-signup" onClick={handleEmailSignupClick} style={{ marginLeft: '8px' }} className='loginlink'>
                                    <FaEnvelope style={{ marginRight: '4px', fontSize: '1.2rem', color: 'red' }} />
                                </a>
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
