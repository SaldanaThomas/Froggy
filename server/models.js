const sha256 = require('js-sha256');
const db = require('./database.js');

module.exports = {
  userLoginGet: (user, pass, callback) => {
    db.findOne({ user, password: sha256(pass) }, (err, result) => {
      if (result) {
        result.password = null;
      }
      callback(err, result);
    });
  },

  userGet: (user, callback) => {
    db.findOne({ user }, (err, result) => {
      if (result) {
        result.password = null;
      }
      callback(err, result);
    });
  },

  userPost: (data, callback) => {
    data.password = sha256(data.password);
    db.create(data, (err) => callback(err));
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
