// src/services/UserService.js
const User = require('../models/UserModel');
const Post = require('../models/PostModel'); // Import model Post

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (userId) => {
    return await User.findById(userId).populate('posts');
};

const updateUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
};

const deleteUserById = async (userId) => {
    // Tìm và xóa tất cả các bài viết của user trước khi xóa user
    await Post.deleteMany({ author: userId });
    return await User.findByIdAndDelete(userId);
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUserById
};
