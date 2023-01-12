const db = require('./database.js');

module.exports = {
  userGet: (data, callback) => {
    db.find({}, (err, result) => {
      callback(err, result[0].drinks);
    });
  },

  userPost: (data, callback) => {
    db.create(data, (err) => {
      callback(err);
    });
  },

  userPatch: (data, callback) => {
    db.updateOne({ _id: data._id }, { $push: { drinks: data.drink } }).exec(
      (err) => {
        callback(err);
      },
    );
  },

  userDelete: (data, callback) => {
    db.update(
      { _id: data._id },
      { $pull: { drinks: { idDrink: data.drink.idDrink } } },
    ).exec((err) => {
      callback(err);
    });
  },
};
