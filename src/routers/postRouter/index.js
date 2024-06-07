// src/routers/postRouter.js
const express = require('express');
const {
    createPost,
    getPost,
    updatePost,
    deletePost
} = require('../../controllers/PostController');

const router = express.Router();

// Định nghĩa các route cho post
router.post('/posts', createPost);
router.get('/posts/:id', getPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
