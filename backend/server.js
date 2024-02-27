// const express = require('express');
// const cors = require('cors');
// const connectDb = require('./config/database');
// const app = express();
// const userRoute = require('./routes/usersRoute');
// const recordRoute = require('./routes/recordRoute'); // Import recordRoute module

// connectDb();

// app.use(express.json());
// app.use(cors());

// // Mount the user routes
// app.use('/users', userRoute);

// // Mount the record routes
// app.use('/records', recordRoute); // Use the '/records' base URL for record routes

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const connectDb = require('./config/database');
const app = express();
const userRoute = require('./routes/usersRoute');
const recordRoute = require('./routes/recordRoute'); // Import recordRoute module

connectDb();

app.use(express.json());
app.use(cors());

// Mount the user routes
app.use('/users', userRoute);

// Mount the record routes
app.use('/records', recordRoute); // Use the '/records' base URL for record routes

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
