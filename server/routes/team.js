const express = require('express');
const router = express.Router();
const serverError = require('./helpers/server-error');
const isAuthorized = require('./helpers/authorize');
const isManager = require('./helpers/manager');
const alreadyMember = require('./helpers/already-member');
const teamExists = require('./helpers/team-exists');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/team/approval
// Approve team member (manager only)
router.post('/approval', isAuthorized, isManager, (req, res, next) => {
  req.db.approval.approve_team_member([req.body.memberID,req.body.teamID])
    .then(() => res.status(200).send('approved'))
    .catch(err => serverError(err, res));
})

// POST /api/team
// Requires team name
// The logged in user becomes the team manager
router.post('/', isAuthorized, (req, res, next) => {
  req.db.team.post_team([req.body.name, req.user[0].id])
    .then(() => req.db.team.get_by_name([req.body.name]))
    .then(team => res.status(200).json(team[0]))
    .catch(err => serverError(err, res));
})

// POST /api/team/join
// body requires teamID
router.post('/join', isAuthorized, alreadyMember, (req, res, next) => {
  req.db.team.post_team_member([req.user[0].id, req.body.teamID])
    .then(() => res.status(200).send('ok'))
    .catch(err => serverError(err, res));
})

// POST /api/team/join-name
// join team by name
router.post('/join-name', isAuthorized, teamExists, (req, res, next) => {
  req.db.team.post_team_member([req.user[0].id, res.locals.teamID])
    .then(() => res.status(200).send('ok'))
    .catch(err => serverError(err, res))
})

// GET /api/team
// see all teams you're an approved member of
router.get('/', isAuthorized, (req, res, next) => {
  req.db.team.get_teams_by_user([req.user[0].id])
    .then(teams => res.status(200).send(JSON.stringify(teams)))
    .catch(err => serverError(err, res))
})

// PUT /api/team/quit
// quit the team
router.put('/quit/:teamID', isAuthorized, (req, res, next) => {
  req.db.team.quit([req.user[0].id, req.params.teamID])
    .then(() => res.status(200).send('quit'))
    .catch(err => serverError(err, res))
})

// GET /api/team/all
// comprehensive list of all teams in database
router.get('/all', isAuthorized, (req, res, next) => {
  req.db.team.get_all()
    .then(teams => res.status(200).json(teams))
    .catch(err => serverError(err, res));
})

// GET /api/team/by-name
// search teams by name
router.get('/by-name', isAuthorized, (req, res, next) => {
  req.db.team.search_by_name([req.body.name + '%'])
    .then(teams => res.status(200).json(teams))
    .catch(err => serverError(err, res));
})

// GET /api/team/organization
// search teams by organization
router.get('/organization', isAuthorized, (req, res, next) => {
  req.db.team.search_by_organization([req.body.organization + '%'])
    .then(teams => res.status(200).json(teams))
    .catch(err => serverError(err, res));
})

// GET /api/team/by-id
// get one team by its id
router.get('/by-id/:id', isAuthorized, (req, res, next) => {
  req.db.team.by_id([req.params.id])
    .then(team => res.status(200).json(team[0]))
    .catch(err => serverError(err, res));
})

// GET /api/team/us
// get all teams you have in common with the other user
router.get('/us', isAuthorized, (req, res, next) => {
  req.db.team.us([req.user[0].id, req.body.theirID])
    .then(teams => res.status(200).json(teams))
    .catch(err => serverError(err, res));
})

// PUT /api/team/organization
// update the team's organization (manager only)
router.put('/organization', isAuthorized, isManager, (req, res, next) => {
  req.db.team.update_organization([req.body.teamID,req.body.organization])
    .then(() => res.status(200).send('updated'))
    .catch(err => serverError(err, res));
})

// PUT /api/team/name
// rename the team (manager only)
router.put('/name', isAuthorized, isManager, (req, res, next) => {
  req.db.team.update_name([req.body.name,req.body.teamID])
    .then(() => res.status(200).send('renamed'))
    .catch(err => serverError(err, res));
})

// PUT /api/team/boot
// boot team member (manager only)
router.put('/boot', isAuthorized, isManager, (req, res, next) => {
  req.db.team.boot_member([req.body.teamID,req.body.memberID])
    .then(() => res.status(200).send('booted'))
    .catch(err => serverError(err, res));
})

// DELETE /api/team
// delete team (manager only)
// warning: this will delete all associated boards, tasks, and comments as well
//   as the team itself.
// users and direct messages will not be deleted.
router.delete('/', isAuthorized, isManager, (req, res, next) => {
  req.db.team.remove([req.body.teamID])
    .then(() => res.status(200).send('deleted/removed'))
    .catch(err => serverError(err, res));
})

module.exports = router;
