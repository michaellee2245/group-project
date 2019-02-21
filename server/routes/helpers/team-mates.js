/* See if two users are team mates */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const userID = req.params.userID || req.body.userID;
  req.db.approval.team_mates([req.user[0].id, req.body.userID])
    .then(r => {
      if (r[0].team_mates) {
        next();
      } else {
        res.status(403).send('you can only see details for your team mates');
      }
    })
    .catch(err => serverError(err,res));
}
