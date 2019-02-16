const serverError = require('./server-error');

module.exports = (req,res,next) => {
  req.db.approval.is_manager([req.user[0].id, req.body.teamID])
    .then(r => {
      if (r[0].manager) {
        next();
      } else {
        res.status(403).send('manager only');
      }
    })
    .catch(err => serverError(err,res));
}
