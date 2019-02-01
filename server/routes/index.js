const express = require('express')
const router = express.Router()

const authRouter = require('./auth');
/*
const userRouter = require('./user');
const taskRouter = require('./task');
const miscRouter = require('./misc');

router.use('/user', userRouter);
router.use('/task', taskRouter);
router.use('/misc', miscRouter);
*/

router.use('/auth', authRouter);

module.exports = router;