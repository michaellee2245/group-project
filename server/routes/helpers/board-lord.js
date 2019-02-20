/* See if a user is owner or team manager of a board */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const boardID = req.params.boardID || req.body.boardID;
  req.db.approval.board_lord([boardID, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        next();
      } else {
        res.status(403).send('not your board');
      }
    })
    .catch(err => serverError(err,res));
}
