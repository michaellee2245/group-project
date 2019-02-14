const express = require('express')
const router = express.Router()

const authRouter = require('./auth');
const taskRouter = require('./task');
const userRouter = require('./user');
const miscRouter = require('./misc');
const teamRouter = require('./team');
const commentRouter = require('./comment');
const messageRouter = require('./message');
const boardRouter = require('./board');

router.use('/auth', authRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);
router.use('/misc', miscRouter);
router.use('/team', teamRouter);
router.use('/comment', commentRouter);
router.use('/message', messageRouter);
router.use('/board', boardRouter);

module.exports = router;
