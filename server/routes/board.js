const express = require('express');
const router = express.Router();

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');
const onTeam = require('./helpers/on-team');
const boardLord = require('./helpers/board-lord');
const sendBoardID = require('./helpers/send-board-id');

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
    .then(id => res.status(200).json({ name: req.body.name, id: id[0].id }))
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
router.get('/modifiable', isAuthenticated, (req,res,next) => {
  req.db.board.modifiable([req.user[0].id])
    .then(boards => res.status(200).json(boards))
    .catch(err => serverError(err,res));
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
