const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.team.get_by_name([req.body.name])
    .then(team => {
      if (team.length > 0) {
        res.locals.teamID = team[0].id;
        next();
      } else {
        res.status(404).send('team not found');
      }
    })
    .catch(err => serverError(err,res));
}

