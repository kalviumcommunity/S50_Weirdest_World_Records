import React from 'react';
import data from './data.json';

function Dummy() {
  return (
    <div className='ml-10 mt-10 mb-10'>
      {data.map(item => (
        <div key={item.User_ID} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{item.Username}</h2>
          <p className="text-sm text-gray-600">User ID: {item.User_ID}</p>
          <p className="text-sm text-gray-600">Email: {item.Email}</p>
          <p className="text-sm text-gray-600">Password: {item.Password}</p>
          <p className="text-sm text-gray-600">Registration Date: {item.Registration_Date}</p>
        </div>
      ))}
    </div>
  );
}

export default Dummy;
