const express = require('express');
const connectDb = require('./config/database');
const app = express();
const userRoute = require('./routes/usersRoute');

connectDb();

// Add middleware for parsing application/json
app.use(express.json());

// Mount the user routes
app.use('/users', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
