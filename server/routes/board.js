const express = require('express');
const router = express.Router();

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onTeam = require('./helpers/on-team');
const boardLord = require('./helpers/board-lord');
const sendBoardID = require('./helpers/send-board-id');
const onBoard = require('./helpers/on-board');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/board
// requires name for new board and id for team it will belong to.
// user must be manager or approved team member or request will fail.
router.post('/', isAuthenticated, onTeam, (req, res, next) => {
  req.db.board.new([req.body.name, req.body.teamID, req.user[0].id])
    .then(() => req.db.board.get_id_by_name([req.body.name]))
    .then(board => res.status(200).json(board[0]))
    .catch(err => serverError(err, res))
})

// GET /api/board
// see the boards you have access to.
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.board.mine([req.user[0].id])
    .then(boards => res.status(200).json(boards))
    .catch(err => serverError(err, res));
})

// GET /api/board/modifiable
// see the boards you own or manage
router.get('/modifiable', isAuthenticated, (req, res, next) => {
  req.db.board.modifiable([req.user[0].id])
    .then(boards => res.status(200).json(boards))
    .catch(err => serverError(err, res));
})

// GET /api/board/id/:name
// get board id by name
// must be an approved team member to access this information
// NOTE: if their are duplicate board names,
//       then only the most recently created will be sent
router.get('/id/:name', isAuthenticated, (req, res, next) => {
  req.db.board.get_id_by_name([req.params.name])
    .then(id => sendBoardID(id[0], req.params.name, req, res, next))
    .catch(err => serverError(err, res))
})

// GET /api/board/t/:teamID
// get all the boards belonging to a team
// (the t in the path stands for team)
// you must be an approved team member to access this information
router.get('/t/:teamID', isAuthenticated, onTeam, (req, res, next) => {
  req.db.board.on_team([req.params.teamID])
    .then(boards => req.status(200).json(boards))
    .catch(err => serverError(err, res));
})

// GET /api/board/name/:searchTerm
// get all the boards you have access to have names beginning with searchTerm
router.get('/name/:searchTerm', isAuthenticated, (req, res, next) => {
  req.db.board.name_search([req.params.searchTerm + '%', req.user[0].id])
    .then(boards => req.status(200).json(boards))
    .catch(err => serverError(err, res));
})

// GET /api/board/by-id/:boardID
// get board by id
router.get('/by-id/:boardID', isAuthenticated, onBoard, (req, res, next) => {
  req.db.board.by_id([req.params.boardID])
    .then(board => res.status(200).json(board))
    .catch(err => serverError(err, res));
})

// DELETE /api/board/:boardID
// must be manager or board owner to delete
router.delete('/:boardID', isAuthenticated, boardLord, (req, res, next) => {
  req.db.board.delete([req.params.boardID])
    .then(() => res.status(200).send('deleted'))
    .catch(err => serverError(err, res));
})

// PUT /api/board/name
// request body requires boardID and name
// must be manager or board owner to rename.
router.put('/name', isAuthenticated, boardLord, (req, res, next) => {
  req.db.board.rename([req.body.name, req.body.boardID])
    .then(() => res.status(200).send('deleted'))
    .catch(err => serverError(err, res));
})

// PUT /api/board/description
// request body requires boardID and description
// must be manager or board owner to update description
router.put('/description', isAuthenticated, boardLord, (req, res, next) => {
  req.db.board.description([req.body.description, req.body.boardID])
    .then(() => res.status(200).send('renamed'))
    .catch(err => serverError(err, res));
})

// PUT /api/board/owner
// request body requires boardID and ownerID
// must be manager or board owner to transfer ownership
router.put('/owner', isAuthenticated, boardLord, (req, res, next) => {
  req.db.board.owner([req.body.ownerID, req.body.boardID])
    .then(() => res.status(200).send('ownership transferred'))
    .catch(err => serverError(err, res));
})

module.exports = router;
