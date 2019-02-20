/* See if a user is an approved member of the board */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  let boardID = req.params.boardID || req.body.boardID;
  req.db.approval.on_board([req.user[0].id, boardID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
