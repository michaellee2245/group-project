const express = require('express');
const router = express.Router();
const serverError = require('./helpers/server-error');
const isAuthorized = require('./helpers/authorize');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// Approve team member
router.post('/approval/:teamID/:userID', isAuthorized, (req, res, next) => {
  req.db.approval.is_manager([req.user[0].id, req.params.teamID])
    .then(manager => {
      console.log(manager)
      if (manager[0].manager) {
        return req.db.approval.approve_team_member([
          req.params.userID,
          req.params.teamID
        ])
      } else return 'not manager';
    })
    .then(r => {
      if (r === 'not manager') {
        res.status(409).send(r);
      } else {
        res.status(200).send('approved');
      }
    })
    .catch(err => serverError(err, res))
})

// POST /api/team
// Requires team name
// The logged in user becomes the team manager
router.post('/', (req, res, next) => {
  if (req.user) {
    req.db.team.post_team([req.body.name, req.user[0].id])
      .then(() => {
        res.status(200).send('ok');
      })
      .catch(err => serverError(err, res));
  } else {
    res.status(401).send('not logged in')
  }
})

// POST /api/team/join
// requires team id
router.post('/join/:teamid', isAuthorized, (req, res, next) => {
  console.log('joining team');
  console.log(req.user[0]);
  console.log(req.params.teamid);
  req.db.team.check_team_member([req.user[0].id, req.params.teamid])
    .then(r => {
      if (r.length > 0) {
        return 'already a member';
      } else {
        return req.db.team.post_team_member([req.user[0].id, req.params.teamid])
      }
    })
    .then(r => {
      if (r === 'already a member') {
        res.status(400).send(r)
      } else {
        res.status(200).send('ok');
      }

    })
    .catch(err => serverError(err, res));
})

router.post('/join/by-name/:name', (req, res, next) => {
  if (req.user) {
    req.db.team.get_team_by_name([req.params.name])
      .then(team => {
        if (team.length > 0) {
          req.db.team.post_team_member([req.user[0].id, team[0].id])
            .then(() => {
              res.status(200).send('ok');
            })
            .catch(err => serverError(err, res))
        } else {
          res.status(404).send('team not found');
        }
      })
      .catch(err => serverError(err, res))
  } else {
    res.status(401).send('not logged in')
  }
})

// GET /api/team
router.get('/', (req, res, next) => {
  if (req.user) {
    req.db.team.get_teams_by_user([req.user[0].id])
      .then(teams => {
        res.status(200).send(JSON.stringify(teams));
      })
      .catch(err => serverError(err, res))
  } else {
    res.status(401).send('not logged in')
  }
})

module.exports = router;