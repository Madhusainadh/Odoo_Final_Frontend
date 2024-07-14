// src/Register.js
import React, { useState } from 'react';
import './Register.css';

const Mail = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Contact:', contact)
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='lbl'>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
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
                    <label className='lbl'>Contact:</label>
                    <input
                        type="tel"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                <div>
                    <label className='lbl'>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='register-btn loginlink'>Register</button>
            </form>
        </div>
    );
};

export default Mail;
