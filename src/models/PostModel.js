// src/models/PostModel.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String,
        required: false,  // Không bắt buộc phải có
        trim: true
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
