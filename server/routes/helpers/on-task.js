/* See if a user is an approved member of the task */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const taskID = req.params.taskID || req.body.taskID;
  req.db.approval.on_task([req.user[0].id, taskID])
    .then(r => {
      if (r[0] && r[0].approved) {
        next();
      } else {
        res.status(403).send('approved team members only');
      }
    })
    .catch(err => serverError(err,res));
}
