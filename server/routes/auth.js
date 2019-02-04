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
                  console.log('hashed something');
                  return req.db.user.post_user([
                    req.body.username,
                    req.body.email,
                    hash,
                    0
                  ]);
                })
                .then(() => {
                  console.log('get login stuff');
                  return req.db.user.get_user_on_login([req.body.username])
                })
                .then(user => {
                    console.log(user);
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
      req.db.user.get_user_password([req.body.username])
        .then(([pw]) => {
          if (!pw) {
            res.status(401).send("User doesn't exist")
          } else {
            comparePassword(req.body.password, pw.password)
              .then(correct => {
                if (!correct) {
                  res.status(401).send('Password Incorrect')
                } else {
                  return req.db.user.get_user_on_login([req.body.username]);
                }
              })
              .then(user => {
                console.log(user);
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
        console.log(req.user);
        req.db.user.get_user_on_login([req.user[0].name])
          .then(user => {
            console.log(user);
            sessionResponse.user = user;
            return req.db.get_boards_by_user_teams([user[0].id])
          })
          .then(boards => {
            sessionResponse.boards = boards;
            res.json(sessionResponse)
          })
      } else {
        console.log('no session found')
        res.status(401).send('session not found')
      }
    })

    module.exports = router;