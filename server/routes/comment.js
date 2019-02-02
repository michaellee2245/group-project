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
  req.db.post_comment([req.body.id, req.user[0].id, req.body.content])
  .then(() => res.status(200).send('ok'))
  .catch(err => serverError(err,res))
})

// get the comments you've authored
router.get('/by-me', (req,res,next) => {
  if (req.user){
    req.db.get_comments_by_user([req.user[0].id])
    .then(comments => {
      res.status(200).send(JSON.stringify(comments));
    })
    .catch(err => serverError(err,res))
  } else {
    res.status(401).send('not logged in')
  }

})

module.exports = router;
