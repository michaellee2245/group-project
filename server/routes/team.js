const express = require('express');
const router = express.Router()
const serverError = require('./helpers/server-error')

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/team
// Requires team name
// The logged in user becomes the team manager
router.post('/',(req,res,next) => {
  if (req.user) {
    req.db.team.post_team([req.body.name, req.user[0].id])
    .then(() => {
      res.status(200).send('ok');
    })
    .catch(err => serverError(err,res));
  } else {
    res.status(401).send('not logged in')
  }
})

// POST /api/team/join
// requires team id
router.post('/join/:teamid',(req,res,next) => {
  if (req.user) {
    req.db.team.post_team_member([req.user[0].id, req.params.teamid])
    .then(() => {
      res.status(200).send('ok');
    })
    .catch(err => serverError(err,res));
  } else {
    res.status(401).send('not logged in');
  }
})

router.post('/join/by-name/:name',(req,res,next) => {
  if (req.user) {
    req.db.team.get_team_by_name([req.params.name])
    .then(team => {
      if (team.length > 0) {
        req.db.team.post_team_member([req.user[0].id, team[0].id])
        .then(() => {
          res.status(200).send('ok');
        })
        .catch(err => serverError(err,res))
      } else {
        res.status(404).send('team not found');
      }
    })
    .catch(err => serverError(err,res))
  } else {
    res.status(401).send('not logged in')
  }
})

// GET /api/team
router.get('/',(req,res,next) => {
  if (req.user) {
    req.db.team.get_teams_by_user([req.user[0].id])
    .then(teams => {
      res.status(200).send(JSON.stringify(teams));
    })
    .catch(err => serverError(err,res))
  }
  else {
    res.status(401).send('not logged in')
  }
})

module.exports = router;
