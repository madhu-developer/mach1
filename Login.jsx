import React, { useState } from 'react';
import './Login.css';
import palnies_logo from './Assets/palniESlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


  return (
    <div className="login-body">
    <div className="logo-container">
        <img src={palnies_logo} alt="Logo" className="logo" width="250"/>
      </div>
    <div className="login-container">
      <div className="login-heading-section">
      <h2>Login</h2>
      <p>Access to our dashboard</p>
      </div>
      <form className="login-form">
        <label htmlFor='email'>Email Address</label>
        <input type="text" id="email" placeholder="admin@palni.com" required />
        <div className='password-section'>
        <label htmlFor='password'>Password</label>
        <a href="#forgot">Forgot password?</a>
        </div>
        <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="password"
              placeholder=".........."
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye:faEyeSlash}
              className="password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};


