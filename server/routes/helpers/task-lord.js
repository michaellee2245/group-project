/* See if a user is owner or team manager of a task */
const serverError = require('./server-error');

module.exports = (req,res,next) => {
  const taskID = req.params.taskID || req.body.taskID;
  req.db.approval.task_lord([taskID, req.user[0].id])
    .then(r => {
      if (r[0].approval) {
        next();
      } else {
        res.status(403).send('not your task');
      }
    })
    .catch(err => serverError(err,res));
}