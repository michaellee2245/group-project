/* See if a user is an approved member of the team */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const teamID = req.params.teamID || req.body.teamID;
  req.db.approval.on_team([req.user[0].id, teamID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
