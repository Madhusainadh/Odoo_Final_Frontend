// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { ChakraProvider, Link, Icon } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='lbl'>Email:</label>
                    <input
                        type="email"
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
                <button type="submit" className='class="pencil-circle"'>Login</button>
                <div className="signup-links">
                    <span className="psw">
                        Signup using <a href="#google-signup" className='loginlink'>Google</a>
                    </span>
                    <span className="psw">
                        Signup using <a href="#email-signup" className='loginlink'>email</a>
                    </span>
                    <ChakraProvider>
                        <Link href="#google-signup" className="loginlink" display="flex" alignItems="center">
                            <Icon as={FaGoogle} w={6} h={6} mr={2} />
                            Google
                        </Link>
                    </ChakraProvider>
                </div>
            </form>
        </div>
    );
};

export default Login;
