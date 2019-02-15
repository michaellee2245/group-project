const express = require('express');
const router = express.Router();

const isAuthenticated = require('./helpers/authorize');
const serverError = require('./helpers/server-error');

router.use((req, res, next) => {
  req.db = req.app.get('db');
  next();
});

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
    .then(msgs => {
      res.status(200).send(`${msgs[0].id}`)
    })
    .catch(err => serverError(err, res))
})

// gets all messages addressed to user (whoever is logged in on the cookie)
router.get('/', isAuthenticated, (req, res, next) => {
  req.db.message.get_messages_by_recipient([req.user[0].id])
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => serverError(err, res))
})

// gets all messages the user has sent
router.get('/sent', isAuthenticated, (req, res, next) => {
  req.db.message.get_messages_by_sender([req.user[0].id])
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => serverError(err, res))
})

// get message by id
router.get('/id/:id', isAuthenticated, (req, res, next) => {
  req.db.message.is_approved([req.params.id, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        return req.db.message.get_message_by_id([req.params.id])
      } else {
        return 'not your message';
      }
    })
    .then(r => {
      if (r === 'not your message') {
        res.status(403).send(r);
      } else {
        res.status(200).json(r);
      }
    })
})

// marks the message as read
router.put('/read/:id', isAuthenticated, (req, res, next) => {
  req.db.message.is_recipient([req.params.id, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        return req.db.message.mark_as_read([req.params.id]);
      } else {
        return 'not your message';
      }
    })
    .then(r => {
      if (r === 'not your message') {
        res.status(403).send(r);
      } else {
        res.status(200).send('marked');
      }
    })
    .catch(err => serverError(err, res));
})

// edit a direct message you've sent
router.put('/id/:id', isAuthenticated, (req, res, next) => {
  req.db.message.is_sender([req.params.id, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        return req.db.message.edit_content([req.params.id, req.body.newContent])
      } else {
        return 'not your message';
      }
    })
    .then(r => {
      if (r === 'not your message') {
        res.status(403).send(r);
      } else {
        res.status(200).send('edited');
      }
    })
    .catch(err => serverError(err, res))
})

// delete message
router.delete('/:id', isAuthenticated, (req, res, next) => {
  req.db.message.is_sender([req.params.id, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        return req.db.message.delete_message([req.params.id])
      } else {
        return 'not your message';
      }
    })
    .then(r => {
      if (r === 'not your message') {
        res.status(403).send(r);
      } else {
        res.status(200).send('deleted');
      }
    })
    .catch(err => serverError(err, res))
})

module.exports = router;
