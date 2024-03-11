import React from 'react';
import './AboutPage.css'
const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* About section */}
        <div className="about-section bg-purple">
          <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-white mb-4">
            Weirdest World Records is your gateway to the most bizarre and fascinating achievements from around the globe.
          </p>
          <p className="text-white">
            Our mission is to celebrate the extraordinary accomplishments of individuals who push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
