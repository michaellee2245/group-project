/* See if a user is an approved member of the assignment */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.approval.on_assignment([req.user[0].id, req.body.assignmentID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
