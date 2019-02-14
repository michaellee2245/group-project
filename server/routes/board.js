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
  req.db.person_is_approved([req.user[0].id, req.body.team])
    .then(approval => {
      if (approval) return req.db.post_board([req.body.name, req.body.team])
      else return 'unapproved';
    })
    .then(r => {
      if (r === 'unapproved') {
        res.status(403).send(r);
        return null;
      } else {
        return req.db.get_board_id_by_name([req.body.name])
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

// get board id by name
// this route might not be necessary actually
router.get('/id/:name', (req, res, next) => {
  req.db.get_board_id_by_name([req.params.name])
    .then(id => {
      res.status(200).json({
        id: id
      })
    })
    .catch(err => serverError(err, res))
})

router.delete('/:id', (req, res, next) => {
  req.db.person_manages_board([req.user.id[0], req.params.id])
})

module.exports = router;