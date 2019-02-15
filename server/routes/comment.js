const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST api/comment
// requires task id and content
router.post('/', (req,res,next) => {
  req.db.other.post_comment([req.body.taskID, req.user[0].id, req.body.content])
  .then(() => res.status(200).send('ok'))
  .catch(err => serverError(err,res))
})

// get the comments you've authored
router.get('/by-me', (req,res,next) => {
  if (req.user){
    req.db.task.get_comments_by_user([req.user[0].id])
    .then(comments => {
      res.status(200).send(JSON.stringify(comments));
    })
    .catch(err => serverError(err,res))
  } else {
    res.status(401).send('not logged in')
  }
})

// get the comments on a task
router.get('/on-task/:id', (req,res,next) => {
  console.log('trying to get comments on task by id');
  if (req.user){
    console.log(req.user);
    req.db.task.get_tasks_by_user_access([req.user[0].id])
      .then(tasks => {
        console.log(tasks);
      })
    req.db.task.get_comments_on_task([req.params.id])
    .then(comments => {
      res.status(200).send(JSON.stringify(comments));
    })
    .catch(err => serverError(err,res))
  } else {
    res.status(401).send('not logged in');
  }
})

module.exports = router;
