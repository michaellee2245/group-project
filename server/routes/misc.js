const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');

const err = (err,res) => {
  return err => {
    res.status(500).send('messed up');
    console.error(err);
  }
}

router.use((req,res,next) => {
  req.db = req.app.get('db');
  next();
});

// req.body requires team name and user id for the manager
router.post('/team', (req,res,next) => {
  req.db.post_team([req.body.name, req.body.manager])
    .then(() => res.status(200).send('ok'))
    .catch(err => err(err,res))
})

// req.body requires user id and team id
router.post('/team-member', (req,res,next) => {
  req.db.post_team_member([req.body.user, req.body.team])
    .then(() => res.status(200).send('ok'))
})

router.post('',isAuthenticated)