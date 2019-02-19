const express = require('express');
const router = express.Router();

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onTeam = require('./helpers/on-team');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// GET /api/dashboard
// get all dashboard items
router.get('/', isAuthenticated, (req,res,next) => {
  res.locals.dash = {};
  req.db.dashboard.get_all_rosters([req.user[0].id])
    .then(roster => {
      res.locals.dash.roster = roster;
      return req.db.dashboard.get_all_boards([req.user[0].id]);
    })
    .then(boards => {
      res.locals.dash.boards = boards;
      return req.db.dashboard.get_all_tasks([req.user[0].id]);
    })
    .then(tasks => {
      res.locals.dash.tasks = tasks;
      return req.db.dashboard.get_all_assignments([req.user[0].id]);
    })
    .then(assignments => {
      res.locals.dash.assignments = assignments;
      return req.db.dashboard.get_all_comments([req.user[0].id]);
    })
    .then(comments => {
      res.locals.dash.comments = comments;
      res.status(200).json(res.locals.dash);
    })
    .catch(err => serverError(err,res));
})

// GET /api/dashboard/team/:teamID
// Get all of the team members, boards, tasks, assignments, and comments
//     that pertain to a particular team...
router.get('/team/:teamID', isAuthenticated, onTeam, (req, res, next) => {
  res.locals.dash = {};
  req.db.dashboard.get_roster([req.params.teamID])
    .then(roster => {
      res.locals.dash.roster = roster;
      return req.db.dashboard.get_boards([req.params.teamID]);
    })
    .then(boards => {
      res.locals.dash.boards = boards;
      return req.db.dashboard.get_tasks([req.params.teamID]);
    })
    .then(tasks => {
      res.locals.dash.tasks = tasks;
      return req.db.dashboard.get_assignments([req.params.teamID]);
    })
    .then(assignments => {
      res.locals.dash.assignments = assignments;
      return req.db.dashboard.get_comments([req.params.teamID]);
    })
    .then(comments => {
      res.locals.dash.comments = comments;
      res.status(200).json(res.locals.dash);
    })
    .catch(err => serverError(err, res));
})

router.get('/')

module.exports = router;
