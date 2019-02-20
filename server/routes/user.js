const express = require('express');
const router = express.Router()

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const teamMates = require('./helpers/team-mates');
const onTeam = require('./helpers/on-team');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// GET /api/user/from-team/:teamID
// show all users that are approved members of the team.
// don't forget the id parameter.
// you must be an approved team member to get this information.
router.get('/from-team/:teamID', onTeam, (req, res, next) => {
  req.db.user.get_users_by_team([req.params.teamID])
    .then(users => res.status(200).json(users))
    .catch(err => serverError(err, res));
})

// GET /api/user/search
// show users with names that begin with the provided name parameter
router.get('/search/:name', isAuthenticated, (req, res, next) => {
  req.db.user.get_user_by_partial_name([req.params.name + '%'])
    .then(user => res.status(200).json(user))
    .catch(err => serverError(err, res));
})

// POST /api/user/follow
// follow the user with the id provided in the body
router.post('/follow', isAuthenticated, (req, res, next) => {
  req.db.user.follow_user([req.user[0].id, req.body.userID])
    .then(() => res.status(200).send('followed'))
    .catch(err => serverError(err, res));
})

// PUT /api/user/unfollow
// unfollow the user with the id provided in the request body
router.put('/unfollow', isAuthenticated, (req, res, next) => {
  req.db.user.unfollow_user([req.user[0].id, req.body.userID])
    .then(() => res.status(200).send('unfollowed'))
    .catch(err => serverError(err, res));
})

// GET api/user/follow
// see the users you are following
router.get('/follow', isAuthenticated, (req, res, next) => {
  req.db.user.get_users_i_am_following([req.user[0].id])
    .then(users => res.status(200).json(users))
    .catch(err => serverError(err, res));
})

// GET api/user/details/:userID
// get the details on a user
// you must be an approved teammate to see this information
router.get('/details/:userID', isAuthenticated, teamMates, (req, res, next) => {
  req.db.user.get_details([req.params.userID])
    .then(user => res.status(200).json(user))
    .catch(err => serverError(err, res));
})

// GET api/user/my-details
// see your own user details
router.get('/my-details', isAuthenticated, (req, res, next) => {
  req.db.user.get_details([req.user[0].id])
    .then(user => res.status(200).json(user))
    .catch(err => serverError(err, res))
})

// PUT api/user/phone
// set your phone number
router.put('/phone', isAuthenticated, (req, res, next) => {
  req.db.user.set_phone([req.body.phone, req.user[0].id])
    .then(() => res.status(200).send('phone set'))
    .catch(err => serverError(err, res));
})

// PUT api/user/location
// set your location
router.put('/location', isAuthenticated, (req, res, next) => {
  req.db.user.set_location([req.body.location, req.user[0].id])
    .then(() => res.status(200).send('location set'))
    .catch(err => serverError(err, res));
})

// PUT api/user/skype
// set your skype
router.put('/skype', isAuthenticated, (req, res, next) => {
  req.db.user.set_skype([req.body.skype, req.user[0].id])
    .then(() => res.status(200).send('skype set'))
    .catch(err => serverError(err, res));
})

// PUT api/user/title
// set your title
router.put('/title', isAuthenticated, (req, res, next) => {
  req.db.user.set_title([req.body.title, req.user[0].id])
    .then(() => res.status(200).send('title set'))
    .catch(err => serverError(err, res));
})

// PUT api/user/pic
// set your profile pic
router.put('/pic', isAuthenticated, (req, res, next) => {
  req.db.user.set_pic([req.body.pic, req.user[0].id])
    .then(() => res.status(200).send('pic set'))
    .catch(err => serverError(err, res));
})

module.exports = router;
