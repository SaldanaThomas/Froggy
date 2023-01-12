const db = require('./database.js');

const hashCode = (str, cb) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  cb(hash);
};

module.exports = {
  userLoginGet: (user, pass, callback) => {
    hashCode(pass, (hashedPassword) => {
      db.findOne({ user, password: hashedPassword }, (err, result) => {
        result.password = '';
        callback(err, result);
      });
    });
  },

  userGet: (user, callback) => {
    db.findOne({ user }, (err, result) => {
      result.password = '';
      callback(err, result);
    });
  },

  userPost: (data, callback) => {
    hashCode(data.password, (hashedPassword) => {
      data.password = hashedPassword;
      db.create(data, (err) => callback(err));
    });
  },

  userPatch: (data, callback) => {
    db.updateOne({ user: data.user }, { $push: { drinks: data.drink } })
      .exec((err) => callback(err));
  },

  userDelete: (data, callback) => {
    console.log(data);
    db.update({ user: data.user }, { $pull: { drinks: { idDrink: data.drink.idDrink } } })
      .exec((err) => callback(err));
  },
};
