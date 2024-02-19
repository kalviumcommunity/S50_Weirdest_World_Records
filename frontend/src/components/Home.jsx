import React from 'react';

function Home() {
  return (
    <div >
    <div className="home-container">
      <h1 className="home-title text-4xl font-extrabold text-purple-700">Weirdest World Records</h1>
      <p className="home-description text-lg font-medium text-gray-800">
        Welcome to the home page of Weirdest World Records! Explore the strangest feats achieved by humans from around the globe.
        <br />
        Learn more about our records <a href="/records" className="text-blue-500 underline">here</a>.
      </p>
    </div>
    </div>
  );
}

export default Home;
