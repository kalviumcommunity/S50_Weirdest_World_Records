import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DummyUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className='ml-10 mt-10 mb-10'>
      {users.map(user => (
        <div key={user._id}>
          <h2>User ID: {user.UserID}</h2>
          <h2>Username: {user.Username}</h2>
          <h2>Email: {user.Email}</h2>
          <h2>Password: {user.Password}</h2>
          <h2>Registration Date: {user.RegistrationDate}</h2>
        </div>
      ))}
    </div>
  );
}

export default DummyUser;
