// src/routers/index.js
const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const router = express.Router();

// Sử dụng các router
router.use('/v1', userRouter);
router.use('/v1', postRouter);

module.exports = router;
