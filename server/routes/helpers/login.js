const serverError = require('./server-error');

module.exports = (user, req, res, next) => {
  return user => {
    console.log('about to log in');
    console.log(user);
    req.login(user, err => {
      if (err) return next(err);
      console.log('logging in');
      req.db.get_boards_by_user_teams([user[0].id])
        .then(boards => {
          res.json({
            id: user[0].id,
            username: user[0].name,
            pic: user[0].profile_pic,
            email: user[0].email,
            boards: boards
          })
        })
        .catch(err => serverError(err,res))
    });
  }
}