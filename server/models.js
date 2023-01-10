const db = require('./database.js');

module.exports = {
  get: (callback) => {
    db.find({}, (err, result) => {
      callback(err, result);
    });
  },

  post: (data, callback) => {
    db.create(data, (err, result) => {
      callback(err, result);
    });
  },

  patch: (data, callback) => {
    db.updateOne({ _id: data._id }, data).exec((err, result) => {
      callback(err, result);
    });
  },

  remove: (data, callback) => {
    db.deleteOne(data).exec((err, result) => callback(err, result));
  },
};
