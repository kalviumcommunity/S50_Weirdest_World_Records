import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/users', formData);
      const { user, token } = response.data;

      // Store token and user details securely
      Cookies.set('token', token, { secure: true, sameSite: 'strict' });
      Cookies.set('username', user.Username, { secure: true, sameSite: 'strict' });
      Cookies.set('email', user.Email, { secure: true, sameSite: 'strict' });


  

      // Show success message and redirect to main page
      setSuccessMessage('Signup successful! Redirecting to main page...');
      setTimeout(() => {
        window.location.href = '/mainpage';
      }, 2000);
    } catch (error) {
      console.error('Error while signing up:', error);
      setErrorMessage('Error signing up');
    }
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-header">Create Account</h2>
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="Username" className="block mb-1">Username:</label>
          <input
            type="text"
            id="Username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label htmlFor="Email" className="block mb-1">Email:</label>
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
          <label htmlFor="Password" className="block mb-1">Password:</label>
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
        <button type="submit" className="submit-button">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
