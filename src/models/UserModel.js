// src/models/UserModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'active',  // Ví dụ giá trị mặc định là 'active'
        enum: ['active', 'inactive', 'banned'],  // Giới hạn các giá trị có thể
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
