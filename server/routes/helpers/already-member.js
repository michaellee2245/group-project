const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.team.check_team_member([req.user[0].id, req.body.teamID])
    .then(r => {
      if (r.length > 0) {
        res.status(400).send(r);
      } else {
        next();
      }
    })
    .catch(err => serverError(err,res));
}
