const express = require('express');
const router = express.Router()

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const teamMates = require('./helpers/team-mates');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// GET /api/user/from-team
// show all users that are approved members of the team.
// don't forget the id parameter.
router.get('/from-team/:id', (req, res, next) => {
  req.db.user.get_users_by_team([req.params.id])
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

// GET /api/user/search
// show users with names that begin with the provided name parameter
router.get('/search/:name', isAuthenticated, (req, res, next) => {
  req.db.user.get_user_by_partial_name([req.params.name + '%'])
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => serverError(err, res))
})

// POST /api/user/follow
// follow the user with the id provided as a parameter
router.post('/follow/:id', isAuthenticated, (req, res, next) => {
  req.db.user.follow_user([req.user[0].id, req.params.id])
    .then(() => res.status(200).send('followed'))
    .catch(err => serverError(err, res));
})

// PUT /api/user/unfollow
// unfollow the user with the id provided as a parameter
router.put('/unfollow/:id', isAuthenticated, (req,res,next) => {
  console.log('tryna unfollow');
  console.log(req.user[0].id);
  console.log(req.params.id);
  req.db.user.unfollow_user([req.user[0].id, Number(req.params.id)])
  .then(() => res.status(200).send('unfollowed'))
  .catch(err => serverError(err,res));
})

router.get('/follow', isAuthenticated, (req, res, next) => {
  req.db.user.get_users_i_am_following([req.user[0].id])
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => serverError(err, res))
})

router.get('/details', isAuthenticated, teamMates, (req, res, next) => {
  req.db.user.get_details([req.body.userID])
    .then(user => res.status(200).json(user))
    .catch(err => serverError(err, res));
})

router.get('/details/me', isAuthenticated, (req, res, next) => {
  req.db.user.get_details([req.user[0].id])
    .then(user => res.status(200).json(user))
    .catch(err => serverError(err, res))
})

router.put('/phone', isAuthenticated, (req, res, next) => {
  req.db.user.set_phone([req.body.phone, req.user[0].id])
    .then(() => res.status(200).send('phone set'))
    .catch(err => serverError(err, res));
})

router.put('/location', isAuthenticated, (req, res, next) => {
  req.db.user.set_location([req.body.location, req.user[0].id])
    .then(() => res.status(200).send('location set'))
    .catch(err => serverError(err, res));
})

router.put('/skype', isAuthenticated, (req, res, next) => {
  req.db.user.set_skype([req.body.skype, req.user[0].id])
    .then(() => res.status(200).send('skype set'))
    .catch(err => serverError(err, res));
})

router.put('/title', isAuthenticated, (req, res, next) => {
  req.db.user.set_title([req.body.title, req.user[0].id])
    .then(() => res.status(200).send('title set'))
    .catch(err => serverError(err, res));
})

router.put('/pic', isAuthenticated, (req, res, next) => {
  req.db.user.set_pic([req.body.pic, req.user[0].id])
    .then(() => res.status(200).send('pic set'))
    .catch(err => serverError(err, res));
})

module.exports = router;