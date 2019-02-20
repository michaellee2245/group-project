/* See if a user is an approved member of the board */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  let bid = req.params.bid || req.body.boardID;
  req.db.approval.on_board([req.user[0].id, bid])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
