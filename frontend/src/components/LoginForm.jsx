import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import Cookies library
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('http://localhost:4000/users')
      .then(response => {
        const userData = response.data;

        // Check if the entered email and password match any user record
        const user = userData.find(user => user.Email === formData.Email && user.Password === formData.Password);

        if (user) {
          // Successful login
          console.log('Login successful');
          setErrorMessage('');
          setSuccessMessage('Login successful! Redirecting to main page...');

          // Store username in cookies
          Cookies.set('username', user.Username);

          // Redirect to main page after 2 seconds
          setTimeout(() => {
            window.location.href = '/mainpage';
          }, 2000);
        } else {
          // Invalid credentials
          console.log('Invalid email or password');
          setErrorMessage('Invalid email or password');
          setSuccessMessage('');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Error logging in');
        setSuccessMessage('');
      });
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-header">Login</h2>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
