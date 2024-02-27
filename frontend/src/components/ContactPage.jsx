import React from 'react';
import './ContactPage.css';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="contact-section bg-green">
        <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
        <p className="text-white mb-4">
          Have a question or want to collaborate with us? Reach out to our team for inquiries and partnerships.
        </p>
        <div className="contact-icons">
          <a href="https://www.instagram.com">
            <img src={instagramIcon} alt="Instagram" className="icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="mailto:contact@weirdestrecords.com">
            <img src={emailIcon} alt="Email" className="icon" />
          </a>
        </div>
        <p className="text-white">
          Email: contact@weirdestrecords.com <br />
          Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
