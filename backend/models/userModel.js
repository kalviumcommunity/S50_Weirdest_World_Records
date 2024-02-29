const mongoose = require('mongoose');


// Define the user schema
const userSchema = new mongoose.Schema({
  Username: String,
  Email: String,
  Password: String,
});



// Create the user model
const User = mongoose.model('User', userSchema);



module.exports = { User };
