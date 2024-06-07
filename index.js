// index.js
require('dotenv').config();
const connectDB = require('./src/dbs/mongo');

// Connect to the database
connectDB()
    .then(() => {
        // Start the app after successful database connection
        require('./src/app');
    })
    .catch((err) => {
        console.error('Failed to connect to the database', err);
    });
