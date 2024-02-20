import React from 'react';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title text-4xl font-extrabold text-red-500 mb-6">Weirdest World Records</h1>
        <p className="landing-description text-lg font-medium text-white mb-8">
          Welcome to the home page of Weirdest World Records! Explore the strangest feats achieved by humans from around the globe.
          <br />
          Learn more about our records <Link to="/records" className="text-blue-500 underline">here</Link>.
        </p>
        <div className="auth-section">
          <h2 className="auth-title text-2xl font-bold text-blue-300 mb-4">Sign In</h2>
          <form className="auth-form">
            <input type="email" placeholder="Email" className="input-field bg-gray-600 mb-4" />
            <input type="password" placeholder="Password" className="input-field bg-gray-600 mb-4" />
            <button type="submit" className="auth-button bg-grey-500">Sign In</button>
          </form>
          <p className="auth-footer text-sm text-blue-600">
            Don't have an account? <Link to="/mainpage" className="text-blue-500 underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
