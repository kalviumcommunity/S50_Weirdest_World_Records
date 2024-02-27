import React from 'react';
import './ServicePage.css'; // Import the CSS file using relative path

const ServicePage = () => {
  return (
    <div className="container mx-auto py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service section */}
        <div className="service-section bg-blue">
          <h2 className="text-xl font-bold mb-4 text-white">Weird Talent Coaching</h2>
          <p className="text-white mb-4">
            If you have a weird talent that could be a weird world record, we're here to help you achieve it!
          </p>
          <p className="text-white">
            Our team of experts will provide coaching and guidance to help you showcase your talent to the world.
          </p>
        </div>

        {/* Add more service sections here */}
      </div>
    </div>
  );
};

export default ServicePage;
