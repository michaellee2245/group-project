const bcrypt = require('bcrypt-nodejs')

module.exports = password => {
  return new Promise ((resolve, reject) => {
    bcrypt.hash(password, null, null, (err, result) => {
      if(err){
        reject(err);
      }else {
        resolve(result)
      }
    })
  });
}