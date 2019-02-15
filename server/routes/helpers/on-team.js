const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.approval.on_team([req.user[0].id, req.body.teamID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
