// src/controllers/UserController.js
const User = require('../models/UserModel');

// Tạo người dùng mới
const createUser = async (req, res) => {
    try {
        const { username, email, password, status } = req.body;
        const user = new User({ username, email, password, status });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Đọc thông tin người dùng
const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).populate('posts');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật trạng thái người dùng
const updateUserStatus = async (req, res) => {
    try {
        const userId = req.params.id;
        const { status } = req.body;
        const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa người dùng
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    updateUserStatus,
    deleteUser
};
