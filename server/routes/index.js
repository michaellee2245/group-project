const express = require('express')
const router = express.Router()

const authRouter = require('./auth');
const taskRouter = require('./task');
const userRouter = require('./user');


/*
const miscRouter = require('./misc');

router.use('/misc', miscRouter);
*/

router.use('/auth', authRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);

module.exports = router;
