const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
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

// board_id, owner_id, name, position, group_name
router.post('/', (req, res, next) => {
  if (req.user) {
    req.db.task.post_task([req.body.id, req.user[0].id, req.body.name, 0, ''])
      .then(() => {
        res.status(200).send('ok');
      })
      .catch(err => serverError(err, res))
  } else {
    res.status(401).send('not logged in')
  }
})

module.exports = router;
