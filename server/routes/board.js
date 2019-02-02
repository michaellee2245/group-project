const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// requires name for new board
router.post('/', (req,res,next) => {
  req.db.post_board([req.body.name])
    .then(() =>{
      res.status(200).send('ok');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

module.exports = router;
