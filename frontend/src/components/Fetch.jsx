import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DummyUser() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://s50-weirdest-world-records-1.onrender.com/users')
    .then((users)=>{
      setUsers( users.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, []) 
  return (
    <>
    <div className='ml-10 mt-10 mb-10'>
      {users && users.map(user => (
        <div key={user.User_ID}>
          <h2>{user.User_ID}</h2>
          <h2>{user.Username}</h2>
          <h2>{user.Email}</h2>
          <h2>{user.Password}</h2>
          <h2>{user.Registration_Date}</h2>
        </div>
      ))}
    </div>
  </>
  )
}

export default DummyUser;