const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// get all tasks for user
router.get('/by-user/:userid', (req,res,next) => {
  req.db.task.get_tasks_by_user([req.params.userid])
    .then(tasks =>{
      res.json(tasks);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

module.exports = router;
