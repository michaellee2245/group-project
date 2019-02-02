const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');
const serverError = require('./helpers/server-error');

router.use((req,res,next) => {
  req.db = req.app.get('db');
  next();
});

// req.body requires user id for recipient, and message content
// only works when logged in
router.post('/', (req,res,next) => {
  if (req.user){
    req.db.post_message([
      req.user[0].id,
      req.body.recipientID,
      req.body.content])
      .then(() => res.status(200).send('ok'))
      .catch(err => serverError(err,res))
    }
})

// gets all messages addressed to user (whoever is logged in on the cookie)
router.get('/', (req,res,next) => {
  if (req.user) {
    console.log(req.user);
    req.db.get_messages_by_recipient([req.user[0].id])
    .then(messages => {
      res.status(200).send(JSON.stringify(messages));
    })
  }
  else res.status(401).send('not logged in');
})

module.exports = router;
