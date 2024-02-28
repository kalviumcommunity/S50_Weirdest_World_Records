import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the js-cookie library
import './SignupForm.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    RegistrationDate: ''
  });

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

    const userData = {
      Username: formData.Username,
      Email: formData.Email,
      Password: formData.Password,
    };

    axios.post('http://localhost:4000/users', userData)
      .then(response => {
        console.log(response.data);
        setSuccessMessage('Signup successful! Redirecting to main page...');

        // Store user details in cookies
        Cookies.set('username', formData.Username);
        Cookies.set('email', formData.Email);

        setTimeout(() => {
          window.location.href = '/mainpage'; // Redirect to main page after 2 seconds
        }, 2000);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, show error message
      });
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-header">Create Account</h2>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="v" className="block mb-1">Username:</label>
          <input
            type="text"
            id="Username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            className="input-field"
            required  // Add the required attribute here
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="input-field"
            required  // Add the required attribute here
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
            required  // Add the required attribute here
          />
        </div>
        <button type="submit" className="submit-button">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
