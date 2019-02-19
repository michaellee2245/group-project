/* See if a user is an approved member of the comment */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const commentID = req.params.commentID || req.body.commentID;
  req.db.approval.on_comment([req.user[0].id, commentID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
