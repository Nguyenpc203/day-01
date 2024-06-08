// src/routers/userRouter.js
const express = require('express');
const UserController = require('../../controllers/UserController');

const router = express.Router();

// Định nghĩa các route cho user
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
