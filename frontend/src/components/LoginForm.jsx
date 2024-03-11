import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://s50-weirdest-world-records-1.onrender.com/users', formData);
      const { user, token } = response.data;

      // Store token in cookies
      Cookies.set('token', token);
      Cookies.set('username', user.Username);

      // Redirect to main page after successful login
      setErrorMessage('');
      setSuccessMessage('Login successful! Redirecting to main page...');
      setTimeout(() => {
        window.location.href = '/mainpage';
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Invalid email or password');
      setSuccessMessage('');
    }
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
