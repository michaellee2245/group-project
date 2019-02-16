const express = require('express')
const router = express.Router()

const authRouter = require('./auth');
const taskRouter = require('./task');
const userRouter = require('./user');
const teamRouter = require('./team');
const commentRouter = require('./comment');
const messageRouter = require('./message');
const boardRouter = require('./board');
const dashboardRouter = require('./dashboard');
const assignmentRouter = require('./assignment');

router.use('/auth', authRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);
router.use('/team', teamRouter);
router.use('/comment', commentRouter);
router.use('/message', messageRouter);
router.use('/board', boardRouter);
router.use('/dashboard', dashboardRouter);
router.use('/assignment', assignmentRouter);

module.exports = router;
