const mongoose = require('mongoose');




// Define the record schema
const recordSchema = new mongoose.Schema({
    RecordHolder: String,
    RecordTitle: String,
    Description: String,
    DateAchieved: String,
    Location: String,
    Username: String
  });


  // Create the record model
const Record = mongoose.model('Record', recordSchema);

module.exports = { Record };