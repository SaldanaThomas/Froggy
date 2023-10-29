const sha256 = require('js-sha256');
const db = require('./database.js');

module.exports = {
  userLoginGet: (username, password, callback) => {
    db.findOne({ username, password: sha256(password) })
      .then((result) => {
        const { user, drinks } = result;
        callback(null, { user, drinks });
      }).catch((err) => callback(err));
  },

  userGet: (user, callback) => {
    db.findOne({ user })
      .then((result) => callback(null, result.drinks))
      .catch((err) => callback(err));
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
