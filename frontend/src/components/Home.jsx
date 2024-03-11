import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Home() {
  useEffect(() => {
    const title = document.querySelector('.hero-title');
    const letters = title.textContent.split('');
    title.textContent = '';
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = 'letter';
      span.style.animationDelay = `${index * 0.1}s`;
      title.appendChild(span);
    });
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="YourLogo" className="logo-img" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/aboutpage" className="nav-link">About</Link></li>
            <li><Link to="/servicepage" className="nav-link">Services</Link></li>
            <li><Link to="/contactpage" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="landing-page">
        <div className="landing-content">
          <div className="hero-section">
            <h1 className="hero-title">Discover the <br /> <span className='bg-yellow-500'>Weirdest</span></h1>
            <p className="hero-description">
              Welcome to the world of extraordinary achievements! Explore the most fascinating records set by individuals from around the globe.
              <br />
              Embark on a journey of awe and wonder.
            </p>
            <div className="btn-group">
              <Link to="/signup" className="get-started-btn">Get Started</Link>
              <Link to="/login" className="login-btn">Login</Link>
            </div>
          </div>
          <div className="auth-section">
            <p className="auth-footer">
              Ready to join the community of record breakers? Start your extraordinary journey now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
