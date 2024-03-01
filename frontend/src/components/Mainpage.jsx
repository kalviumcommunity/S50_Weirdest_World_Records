// MainPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import Cookies from 'js-cookie';
import './MainPage.css';

function MainPage() {
  const [username, setUsername] = useState('');
  const [postData, setPostData] = useState([]);
  const [filteredPostData, setFilteredPostData] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/records');
      setPostData(response.data);
      setFilteredPostData(response.data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  const handleLogout = () => {
    Cookies.remove('username');
    setUsername('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/records/${postId}`);
      setPostData((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      setFilteredPostData((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleUserSelect = (selectedUser) => {
    setSelectedUsername(selectedUser);
    if (selectedUser === 'All') {
      setFilteredPostData(postData);
    } else {
      const filteredPosts = postData.filter((post) => post.Username === selectedUser);
      setFilteredPostData(filteredPosts);
    }
  };

  return (
    <div className={`main-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="YourLogo" className="logo-img" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {username && (
            <div className="username">
              <span>Welcome, {username}</span>
              <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
          )}
          <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </nav>
      <div className='line-btw bg-gradient'></div>
      <div className="content-wrapper">
        <div className="left-content">
          <div className="posting-section">
            <h2>Posting Section</h2>
            {/* Add your posting section UI elements and functionality */}
            <button className="post-button">Post</button>
          </div>
          <div className="view-data-section">
            <select onChange={(e) => handleUserSelect(e.target.value)} value={selectedUsername}>
              <option value="All">All Users</option>
              {[...new Set(postData.map((post) => post.Username))].map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
            <div className="post-list">
              {filteredPostData.map((post) => (
                <div key={post._id} className="post-item">
                  <div className="post-box bg-gray-200 rounded p-4 mb-4">
                    <h3>{post.RecordTitle}</h3>
                    <p>Record Holder: {post.RecordHolder}</p>
                    <p>Description: {post.Description}</p>
                    <p>Date Achieved: {post.DateAchieved}</p>
                    <p>Location: {post.Location}</p>
                    <p>Username: {post.Username}</p>
                    <div className="button-group mt-2">
                      <Link to={`/update/${post._id}`} className="update-btn bg-blue-500 text-white px-4 py-2 mr-2 rounded">Update</Link>
                      <button className="delete-btn bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeletePost(post._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
