const sha256 = require('js-sha256');
const db = require('./database.js');

module.exports = {
  userLoginGet: (username, password) => db.findOne({ username, password: sha256(password) }),

  userGet: (user) => db.findOne({ user }),

  userPost: (data) => {
    data.password = sha256(data.password);
    return db.create(data);
  },

  userPatch: (data) => db.updateOne({ user: data.user }, { $push: { drinks: data.drink } }),

  userDelete: (data) => {
    return db.updateOne(
      { user: data.user },
      { $pull: { drinks: { idDrink: data.drink.idDrink } } },
    );
  },
};
