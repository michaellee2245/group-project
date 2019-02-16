/* See if a user is an approved member of the team */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  console.log('checking team')
  console.log(req.user)
  console.log(req.params)
  req.db.approval.on_team([req.user[0].id, req.params.teamID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
