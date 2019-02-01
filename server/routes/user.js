const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

router.get('/from-team/:id', (req,res,next) => {
  req.db.user.get_users_by_team([req.params.id])
    .then(users =>{
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

module.exports = router;
