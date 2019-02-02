module.exports = (err,res) => {
  return err => {
    res.status(500).send('messed up');
    console.error(err);
  }
};
