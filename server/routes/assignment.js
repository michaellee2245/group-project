const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onTask = require('./helpers/on-task');
const onAssignment = require('./helpers/on-assignment');
const assignmentLord = require('./helpers/assignment-lord');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/assignment
// requires task id and user id
router.post('/', isAuthenticated, onTask, (req, res, next) => {
  req.db.assignment.new([
      req.body.taskID,
      req.body.userID,
      req.user[0].id
    ])
    .then(() => req.db.assignment.by_me([req.user[0].id]))
    .then(a => res.status(200).json(a[0]))
    .catch(err => serverError(err, res))
})

// GET /api/assignment
// get your assignments
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.assignment.on_me([req.user[0].id])
    .then(a => res.status(200).json(a))
    .catch(err => serverError(err, res));
})

// GET /api/assignment/by-me
// get the assignments you've made
router.get('/by-me', isAuthenticated, (req, res, next) => {
  req.db.assignment.by_me([req.user[0].id])
    .then(a => res.status(200).json(a))
    .catch(err => serverError(err, res));
})

// GET /api/assignment/by-id/:assignmentID
// get the assignment indicated in req.body.assignmentID
router.get(
  '/by-id/:assignmentID',
  isAuthenticated,
  onAssignment,
  (req, res, next) => {
    req.db.assignment.by_id([req.params.assignmentID])
      .then(a => res.status(200).json(a))
      .catch(err => serverError(err, res));
  })

// GET /api/assignment/all
// get all the assignments I have the right to view
router.get('/all', isAuthenticated, (req, res, next) => {
  req.db.assignment.all([req.user[0].id])
    .then(a => res.status(200).json(a))
    .catch(err => serverError(err, res));
})

// DELETE /api/assignment/:assignmentID
// must be the assigner, assignee, task owner, board owner, or manager
router.delete(
  '/:assignmentID',
  isAuthenticated,
  assignmentLord,
  (req, res, next) => {
    req.db.assignment.delete([req.params.assignmentID])
      .then(() => res.status(200).send('deleted assignment'))
      .catch(err => serverError(err, res));
  })

module.exports = router;
