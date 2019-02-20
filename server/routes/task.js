const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onBoard = require('./helpers/on-board');
const onTask = require('./helpers/on-task');
const teamMates = require('./helpers/team-mates');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/task
// create task
// board_id, owner_id, name, position, group_name
router.post('/', isAuthenticated, onBoard, (req, res, next) => {
  req.db.task.post_task([
      req.body.boardID,
      req.user[0].id,
      req.body.name,
      0,
      ''
    ])
    .then(() => req.db.task.get_by_name([req.body.name]))
    .then(task => res.status(200).json(task[0]))
    .catch(err => serverError(err, res))
})

// GET /api/task
// get all tasks that I can access as an approved team member
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.task.accessible([req.user[0].id])
    .then(tasks => res.status(200).json(tasks))
    .catch(err => serverError(err, res))
})

// GET /api/task/by-board/:boardID
// get all tasks on the board
router.get('/by-board/:boardID', isAuthenticated, onBoard, (req,res,next) => {
  req.db.task.by_board([req.params.boardID])
    .then(tasks => res.status(200).json(tasks))
    .catch(err => serverError(err,res));
})

// GET /api/task/by-user/:userID
// get all tasks for user
router.get('/by-user/:userID', isAuthenticated, teamMates, (req, res, next) => {
  req.db.task.get_tasks_by_user([req.params.userID])
    .then(tasks => res.status(200).json(tasks))
    .catch(err => serverError(err,res));
})

// PUT /api/task/priority
// set priority
router.put('/priority', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_priority([req.body.taskID, req.body.priority])
    .then(() => res.status(200).send('priority set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/position
// set position
router.put('/position', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_position([req.body.taskID, req.body.position])
    .then(() => res.status(200).send('position set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/status
// set status
router.put('/status', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_status([req.body.taskID, req.body.status])
    .then(() => res.status(200).send('status set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/group
// set group
router.put('/group', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_group([req.body.taskID, req.body.group])
    .then(() => res.status(200).send('group set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/start-date
// set start date
router.put('/start-date', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_start_date([req.body.taskID, req.body.startDate])
    .then(() => res.status(200).send('start date set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/end-date
// set end date
router.put('/end-date', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_end_date([req.body.taskID, req.body.endDate])
    .then(() => res.status(200).send('end date set'))
    .catch(err => serverError(err, res));
})

// PUT /api/task/time-est
// set time estimate
router.put('/time-est', isAuthenticated, onTask, (req, res, next) => {
  req.db.task.set_time_est([req.body.taskID, req.body.timeEst])
    .then(() => res.status(200).send('time estimate set'))
    .catch(err => serverError(err, res));
})

module.exports = router;
