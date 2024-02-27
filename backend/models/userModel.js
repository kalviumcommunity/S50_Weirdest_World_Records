const mongoose = require('mongoose');


// Define the user schema
const userSchema = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
});

// Define the record schema
const recordSchema = new mongoose.Schema({
  RecordHolder: String,
  RecordTitle: String,
  Description: String,
  DateAchieved: String,
  Location: String,
  Username: String
});

// Create the user model
const User = mongoose.model('User', userSchema);

// Create the record model
const Record = mongoose.model('Record', recordSchema);

module.exports = { User, Record };
