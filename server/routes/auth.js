const express = require('express');
const router = express.Router()

const comparePassword = require('./helpers/compare')
const hashPassword = require('./helpers/hash')

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})


// requires username, password, and email
router.post('/register', (req, res, next) => {
  req.db.user.get_user_by_name([req.body.username])
    .then(([user]) => {
      if (Number(user.count)) {
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
          .then(() => res.status(200).send('user created'))
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
              return req.db.user.get_user([pw.id])

            }
          })
          .then(user => {
            req.login(user, err => {
              if (err) return next(err);
              res.json({
                id: user.id,
                username: user.name,
                pic: user.profile_pic,
                email: user.email
              })
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

router.get('/session', (req, res) => {
  if (req.user) {
    console.log('hey I\'m tryna get session!');
    console.log(req.user);
    res.json({
      id: req.user[0].id,
      username: req.user[0].name
    })
  } else {
    console.log('no session found')
    res.status(401).send('session not found')
  }
})

module.exports = router;
