// src/dbs/mongo.js
const mongoose = require('mongoose');

const getDatabaseUri = () => {
    const env = process.env.NODE_ENV || 'development';
    switch (env) {
        case 'development':
            return process.env.DEV_MONGODB_URI;
        case 'qc':
            return process.env.QC_MONGODB_URI;
        case 'production':
            return process.env.PROD_MONGODB_URI;
        default:
            throw new Error(`Unknown environment: ${env}`);
    }
};

const connectDB = async () => {
    const uri = getDatabaseUri();
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected to ${uri}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
