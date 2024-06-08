// src/app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const router = require('./routers');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// Sử dụng router chính
app.use('/api', router);



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
