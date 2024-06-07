// src/routers/index.js
const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const router = express.Router();

// Sử dụng các router
router.use(userRouter);
router.use(postRouter);

module.exports = router;
