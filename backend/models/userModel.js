const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
