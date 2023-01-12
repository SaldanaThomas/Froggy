const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cocktails');

const schema = mongoose.Schema({
  user: { type: String, unique: true },
  drinks: [{ idDrink: String, strDrink: String, strDrinkThumb: String }],
});

module.exports = mongoose.model('cocktails', schema);
