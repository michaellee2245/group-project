const express = require('express');
const router = express.Router();

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onTeam = require('./helpers/on-team');
const boardLord = require('./helpers/board-lord');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// requires name for new board and id for team it will belong to.
// user must be manager or approved team member or request will fail.
router.post('/', isAuthenticated, onTeam, (req, res, next) => {
  req.db.board.post_board([req.body.name, req.body.teamID])
    .then(() => req.db.board.get_board_id_by_name([req.body.name]))
    .then(id => res.status(200).json({name: req.body.name,id: id[0].id}))
    .catch(err => serverError(err, res))
})

// see the boards you have access to.
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.board.get_my_boards([req.user[0].id])
    .then(boards => res.status(200).json(boards))
    .catch(err => serverError(err, res));
})

// get board id by name
router.get('/id/:name', isAuthenticated, (req, res, next) => {
  req.db.board.get_board_id_by_name([req.params.name])
    .then(id => res.status(200).json(id))
    .catch(err => serverError(err, res))
})

router.delete('/', isAuthenticated, boardLord, (req, res, next) => {
  req.db.board.delete_board([req.body.boardID])
    .then(() => res.status(200).send('deleted'))
    .catch(err => serverError(err,res));
})
/*
router.put('/description', isAuthenticated, (req,res,next) => {
  req.db.approval.person_manage
})
*/
module.exports = router;
