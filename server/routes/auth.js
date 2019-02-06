const express = require('express');
const router = express.Router()

const comparePassword = require('./helpers/compare')
const hashPassword = require('./helpers/hash')
const serverError = require('./helpers/server-error');

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// POST /api/auth/register
// requires username, password, and email
router.post('/register', (req, res, next) => {
      req.db.user.get_user_by_name([req.body.username])
        .then(([user]) => {
            if (user) {
              res.status(409).send('User already exists')
            } else {
              hashPassword(req.body.password)
                .then(hash => {
                  return req.db.user.post_user([
                    req.body.username,
                    req.body.email,
                    hash,
                    0
                  ]);
                })
                .then(() => {
                  return req.db.user.get_user_on_login([req.body.username])
                })
                .then(user => {
                    req.login(user, err => {
                      if (err) return next(err);
                      req.db.get_boards_by_user_teams([user[0].id])
                        .then(boards => {
                          res.json({
                            user: user[0],
                            boards: boards
                          })
                        })
                        .catch(err => serverError(err, res))
                    });

                  })
                  .catch(next);
                }
            });
        });

    // requires username and password
    router.post('/login', (req, res, next) => {
      const loginResponse = {};
      req.db.user.get_user_password([req.body.username])
        .then(([pw]) => {
          if (!pw) {
            res.status(401).send("User doesn't exist")
          } else {
            comparePassword(req.body.password, pw.password)
              .then(correct => {
                if (!correct) {
                  const responseText = 'Password Incorrect';
                  console.log(responseText);
                  res.status(401).send(responseText);
                } else {
                  return req.db.user.get_user_on_login([req.body.username]);
                }
              })
              .then(user => {
                if (!user) return;
                req.login(user, err => {
                  if (err) return next(err);
                  req.db.get_boards_by_user_teams([user[0].id])
                    .then(boards => {
                      loginResponse.user = user[0];
                      loginResponse.boards = boards;
                      return req.db.get_teams_by_user([user[0].id])
                    })
                    .then(teams => {
                      loginResponse.teams = teams;
                      res.json(loginResponse)
                    })
                    .catch(err => serverError(err, res))
                });
              })
              .catch(error => console.log(error))
          }
         })
        .catch(next)
    })

    router.get('/logout', (req, res, next) => {
      req.logout();
      res.status(200).send()
    })

    // GET /api/auth/session

    router.get('/session', (req, res) => {
      const sessionResponse = {};
      if (req.user) {
        req.db.user.get_user_on_login([req.user[0].name])
          .then(user => {
            sessionResponse.user = user[0];
            return req.db.get_boards_by_user_teams([user[0].id])
          })
          .then(boards => {
            sessionResponse.boards = boards;
            res.json(sessionResponse)
          })
          .catch(err => serverError(err, res))
      } else {
        console.log('no session found')
        res.status(401).send('session not found')
      }
    })

    // delete my account...
    router.delete('/me', (req,res) => {
      if (req.user) {
        req.db.user.delete_user([req.user[0].id])
          .then(() => {
            res.status(200).send('deleted');
          })
          .catch(err => serverError(err, res))
      }
    })
    module.exports = router;