const express = require('express')
const router = express.Router()

const authRouter = require('./auth');

const userRouter = require('./user');

router.use('/user', userRouter);
/*
const taskRouter = require('./task');
const miscRouter = require('./misc');
router.use('/task', taskRouter);
router.use('/misc', miscRouter);
*/

router.use('/auth', authRouter);

module.exports = router;
