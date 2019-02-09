const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// get all my tasks
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.task.get_tasks_by_user([req.user[0].id])
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => serverError(err, res))
})

// get all tasks for user
router.get('/by-user/:userid', (req, res, next) => {
  req.db.task.get_tasks_by_user([req.params.userid])
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

// create task
// board_id, owner_id, name, position, group_name
router.post('/', isAuthenticated, (req, res, next) => {
  console.log('creating task');
  console.log(req.body);
  console.log(req.user);
  req.db.task.post_task([
      req.body.boardID,
      req.user[0].id,
      req.body.name,
      0,
      ''
    ])
    .then(() => {
      res.status(200).send('ok');
    })
    .catch(err => serverError(err, res))
})

module.exports = router;
