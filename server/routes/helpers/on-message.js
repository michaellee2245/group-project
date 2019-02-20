/* See if a user is a sender or recipient of the direct message */
const serverError = require('./server-error');

module.exports = (req, res, next) => {
  const messageID = req.params.messageID || req.body.messageID;
  req.db.approval.on_message([messageID, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        next();
      } else {
        res.status(403).send('not your message');
      }
    })
    .catch(err => serverError(err, res));
}
