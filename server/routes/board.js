const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  req.db = req.app.get('db')
  next();
})

// requires name for new board
router.post('/', (req,res,next) => {
  req.db.post_board([req.body.name])
    .then(() => {
      return req.db.get_board_id_by_name([req.body.name])
    })
    .then(id =>{
      res.status(200).send(JSON.stringify({
        boardName: req.body.name,
        boardID: id
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('didn\'t work');
    })
})

// get board id by name
router.get('/id/:name', (req,res,next) => {

})

module.exports = router;
