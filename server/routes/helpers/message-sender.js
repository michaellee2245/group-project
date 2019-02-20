/* See if a user is sender of the direct message */
const serverError = require('./server-error');

module.exports = (req, res, next) => {
  const messageID = req.params.messageID || req.body.messageID;
  req.db.approval.message_sender([messageID, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        next();
      } else {
        res.status(403).send('not your message');
      }
    })
    .catch(err => serverError(err, res));
}
