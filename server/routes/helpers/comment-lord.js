/* See if a user is author, of a comment,
   or owner of its task or board or team manager over the comment */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.approval.comment_lord([req.body.commentID, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        next();
      } else {
        res.status(403).send('not your comment');
      }
    })
    .catch(err => serverError(err,res));
}
