// src/routers/userRouter.js
const express = require('express');
const {
    createUser,
    getUser,
    updateUserStatus,
    deleteUser
} = require('../../controllers/UserController');

const router = express.Router();

// Định nghĩa các route cho user
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.patch('/users/:id/status', updateUserStatus);
router.delete('/users/:id', deleteUser);

module.exports = router;
