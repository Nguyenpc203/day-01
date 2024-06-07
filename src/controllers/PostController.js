// src/controllers/PostController.js
const Post = require('../models/PostModel');
const User = require('../models/UserModel');

// Tạo bài viết mới
const createPost = async (req, res) => {
    try {
        const { title, content, author, imageUrl } = req.body;
        const post = new Post({ title, content, author, imageUrl });
        await post.save();

        // Thêm bài viết vào danh sách bài viết của user
        await User.findByIdAndUpdate(author, { $push: { posts: post._id } });

        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Đọc thông tin bài viết
const getPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId).populate('author', 'username email');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật bài viết
const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content, imageUrl } = req.body;
        const post = await Post.findByIdAndUpdate(postId, { title, content, imageUrl }, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa bài viết
const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Xóa bài viết khỏi danh sách bài viết của user
        await User.findByIdAndUpdate(post.author, { $pull: { posts: postId } });

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost
};
