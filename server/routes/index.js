const express = require('express')
const router = express.Router()

const authRouter = require('./auth');
const boardRouter = require('./board');
const teamRouter = require('./team');
const userRouter = require('./user');
const taskRouter = require('./task');
const messageRouter = require('./message');
const commentRouter = require('./comment');
const dashboardRouter = require('./dashboard');
const assignmentRouter = require('./assignment');

router.use('/auth', authRouter);
router.use('/board', boardRouter);
router.use('/team', teamRouter);
router.use('/user', userRouter);
router.use('/task', taskRouter);
router.use('/message', messageRouter);
router.use('/comment', commentRouter);
router.use('/dashboard', dashboardRouter);
router.use('/assignment', assignmentRouter);

module.exports = router;
