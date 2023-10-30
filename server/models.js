const sha256 = require('js-sha256');
const db = require('./database.js');

module.exports = {
  userLoginGet: (username, password) => db.findOne({ username, password: sha256(password) }),

  userGet: (user) => db.findOne({ user }),

  userPost: (data) => {
    data.password = sha256(data.password);
    return db.create(data);
  },

  userPatch: (user, drink) => db.updateOne({ user }, { $push: { drinks: drink } }),

  userDelete: (user, idDrink) => db.updateOne({ user }, { $pull: { drinks: { idDrink } } }),
};
