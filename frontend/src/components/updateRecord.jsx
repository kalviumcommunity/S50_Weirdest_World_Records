import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

import './UpdateRecord.css';

function UpdateRecord() {
  const [record, setRecord] = useState({
    RecordHolder: '',
    RecordTitle: '',
    Description: '',
    DateAchieved: '',
    Location: '',
    Username: ''
  });

  const [updatedMessage, setUpdatedMessage] = useState('');
  // const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchRecordData = async () => {
      try {
        const response = await axios.get(`https://s50-weirdest-world-records-1.onrender.com/${id}`);
        setRecord(response.data);
      } catch (error) {
        console.error('Error fetching record data:', error);
      }
    };

    if (id) {
      fetchRecordData();
    }
  }, [id]);

  const handleChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://s50-weirdest-world-records-1.onrender.com/records/${id}`, record);
      setUpdatedMessage('Record updated successfully!');
      console.log('Record updated successfully!');
      setTimeout(() => {
        history.push('/MainPage');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (
    <div className="update-record-container">
      <h2 className="update-record-heading">Update Post</h2>
      <form onSubmit={handleSubmit} className="update-record-form">
        <div className="form-group">
          <label>Record Holder:</label>
          <input type="text" name="RecordHolder" value={record.RecordHolder} onChange={handleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label>Record Title:</label>
          <input type="text" name="RecordTitle" value={record.RecordTitle} onChange={handleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="Description" value={record.Description} onChange={handleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label>Date Achieved:</label>
          <input type="text" name="DateAchieved" value={record.DateAchieved} onChange={handleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="Location" value={record.Location} onChange={handleChange} className="input-field" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="Username" value={record.Username} onChange={handleChange} className="input-field" />
        </div>
        <button type="submit" className="update-record-button">Update Post</button>
      </form>
      {updatedMessage && <p>{updatedMessage}</p>}
    </div>
  );
}

export default UpdateRecord;
