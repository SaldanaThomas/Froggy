const db = require('./database.js');

module.exports = {
  userGet: (data, callback) => {
    db.findOne({ user: data }, (err, result) => {
      callback(err, result);
    });
  },

  userPost: (data, callback) => {
    db.create(data, (err) => {
      callback(err);
    });
  },

  userPatch: (data, callback) => {
    db.updateOne({ user: data.user }, { $push: { drinks: data.drink } }).exec(
      (err) => {
        callback(err);
      },
    );
  },

  userDelete: (data, callback) => {
    db.update(
      { user: data.user },
      { $pull: { drinks: { idDrink: data.drink.idDrink } } },
    ).exec((err) => {
      callback(err);
    });
  },
};
