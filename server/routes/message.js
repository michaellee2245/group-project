const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');
const serverError = require('./helpers/server-error');
const onMessage = require('./helpers/on-message');
const messageRecipient = require('./helpers/message-recipient');
const messageSender = require('./helpers/message-sender');

router.use((req, res, next) => {
  req.db = req.app.get('db');
  next();
});

// POST /api/message
// req.body requires user id for recipient, and message content
// only works when logged in
router.post('/', isAuthenticated, (req, res, next) => {
  req.db.message.post_message([
      req.user[0].id,
      req.body.recipientID,
      req.body.content
    ])
    .then(() => {
      return req.db.message.get_message_by_sender_receiver_most_recent([
        req.user[0].id,
        req.body.recipientID
      ])
    })
    .then(msgs => res.status(200).send(`${msgs[0].id}`))
    .catch(err => serverError(err, res));
})

// GET /api/message
// gets all messages addressed to user (whoever is logged in on the cookie)
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.message.get_messages_by_recipient([req.user[0].id])
    .then(messages => res.status(200).json(messages))
    .catch(err => serverError(err, res));
})

// GET /api/message/sent
// gets all messages the user has sent
router.get('/sent', isAuthenticated, (req, res, next) => {
  req.db.message.get_messages_by_sender([req.user[0].id])
    .then(messages => res.status(200).json(messages))
    .catch(err => serverError(err, res));
})

// GET /api/message/id/:messageID
// get message by id
router.get('/id/:messageID', isAuthenticated, onMessage, (req, res, next) => {
  req.db.message.get_message_by_id([req.params.id])
    .then(message => res.status(200).json(message))
    .catch(err => serverError(err, res));
})

// PUT /api/message/read
// marks the message as read
// requires req.body.messageID
router.put('/read', isAuthenticated, messageRecipient, (req, res, next) => {
  req.db.message.mark_as_read([req.body.messageID])
    .then(r => res.status(200).send('marked'))
    .catch(err => serverError(err, res));
})

// PUT /api/message
// edit a direct message you've sent
// requires req.body.messageID and req.body.content
router.put('/id/:id', isAuthenticated, (req, res, next) => {
  req.db.message.edit_content([req.body.messageID, req.body.content])
    .then(r => res.status(200).send('edited'))
    .catch(err => serverError(err, res));
})

// DELETE /api/message/:messageID
// delete message you sent or received
router.delete('/:messageID', isAuthenticated, onMessage, (req, res, next) => {
  req.db.message.delete_message([req.params.messageID])
    .then(r => res.status(200).send('deleted'))
    .catch(err => serverError(err, res));
})

module.exports = router;
