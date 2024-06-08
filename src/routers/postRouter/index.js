// src/routers/postRouter.js
const express = require('express');
const PostController = require('../../controllers/PostController');

const router = express.Router();

// Định nghĩa các route cho post
router.post('/posts', PostController.createPost);
router.get('/posts/:id', PostController.getPost);
router.patch('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
