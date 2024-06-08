// src/services/PostService.js
const Post = require('../models/PostModel');
const User = require('../models/UserModel');

const createPost = async (postData) => {
    const post = new Post(postData);
    await post.save();

    // Thêm bài viết vào danh sách bài viết của user
    await User.findByIdAndUpdate(post.author, { $push: { posts: post._id } });

    return post;
};

const getPostById = async (postId) => {
    return await Post.findById(postId).populate('author', 'username email');
};

const updatePostById = async (postId, postData) => {
    return await Post.findByIdAndUpdate(postId, postData, { new: true });
};

const deletePostById = async (postId) => {
    const post = await Post.findByIdAndDelete(postId);
    if (post) {
        // Xóa bài viết khỏi danh sách bài viết của user
        await User.findByIdAndUpdate(post.author, { $pull: { posts: postId } });
    }
    return post;
};

module.exports = {
    createPost,
    getPostById,
    updatePostById,
    deletePostById
};
