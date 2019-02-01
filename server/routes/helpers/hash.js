const bcrypt = require('bcrypt-nodejs')
const saltRounds = 10;

module.exports = password => {
  console.log('called the hash function');
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