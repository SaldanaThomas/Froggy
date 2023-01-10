const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies');

const schema = mongoose.Schema({
  title: String,
  year: Number,
  runTime: Number,
  metaScore: Number,
  imdbRating: Number,
  watched: Boolean,
});

module.exports = mongoose.model('movie', schema);
