const express = require('express');
const router = express.Router();

const serverError = require('./helpers/server-error');
const isAuthenticated = require('./helpers/authorize');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// requires name for new board and id for team it will belong to.
// user must be manager or approved team member or request will fail.
router.post('/', isAuthenticated, (req, res, next) => {
  req.db.approval.person_is_approved([req.user[0].id, req.body.teamID])
    .then(approval => {
      if (approval) return req.db.board.post_board([req.body.name, req.body.teamID])
      else return 'unapproved';
    })
    .then(r => {
      if (r === 'unapproved') {
        res.status(403).send(r);
        return null;
      } else {
        return req.db.board.get_board_id_by_name([req.body.name])
      }
    })
    .then(id => {
      if (id) {
        res.status(200).json({
          name: req.body.name,
          id: id[0].id
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

// see the boards you have access to.
router.get('/', isAuthenticated, (req,res,next) => {
  req.db.board.get_my_boards([user[0].id])
    .then(boards => {
      res.status(200).json(boards);
    })
    .catch(err => serverError(err,res));
})

// get board id by name
router.get('/id/:name', isAuthenticated, (req, res, next) => {
  req.db.board.get_board_id_by_name([req.params.name])
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => serverError(err, res))
})

router.delete('/:id', isAuthenticated, (req, res, next) => {
  req.db.approval.person_manages_board([req.params.id, req.user[0].id])
    .then(r => {
      if (r[0].approval){
        return req.db.board.delete_board([req.params.id])
      } else {
        return 'not your board';
      }
    })
    .then(r => {
      if (r === 'not your board'){
        res.status(403).send(r);
      } else {
        res.status(200).send('deleted')
      }
    })
})

module.exports = router;
