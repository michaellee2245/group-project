const express = require('express');
const router = express.Router()

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// don't forget the id parameter.
router.get('/from-team/:id', (req,res,next) => {
  req.db.user.get_users_by_team([req.params.id])
    .then(users =>{
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

// add/change the user's profile pic
router.put('/pic', isAuthenticated, (req,res,next) => {
  req.db.user.update_pic([req.user[0].id, req.body.pic])
  .then(() => {
    res.status(200).send('updated')
  })
  .catch(err => serverError(err, res))
})

router.get('/search/:name', isAuthenticated, (req,res,next) => {
  req.db.user.get_user_by_partial_name([req.params.name+'%'])
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => serverError(err,res))
})

router.post('/follow/:id', isAuthenticated, (req,res,next) => {
  req.db.user.follow_user([req.user[0].id, req.params.id])
    .then(() => {
      res.status(200).send('followed')
    })
    .catch(err => serverError(err,res))
})

router.get('/follow', isAuthenticated, (req,res,next) => {
  req.db.user.get_users_i_am_following([req.user[0].id])
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => serverError(err,res))
})

module.exports = router;
