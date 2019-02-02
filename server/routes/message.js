const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');
const serverError = require('./helpers/server-error');

router.use((req,res,next) => {
  req.db = req.app.get('db');
  next();
});

// req.body requires user id for sender,
//     user id for recipient, and message content
router.post('/', (req,res,next) => {
  req.db.post_message([
    req.body.senderID,
    req.body.recipientID,
    req.body.content])
    .then(() => res.status(200).send('ok'))
    .catch(err => serverError(err,res))
})

// gets all messages addressed to user (whoever is logged in on the cookie)
router.get('/', (req,res,next) => {
  console.log(req.user);
})

router.post('',isAuthenticated)