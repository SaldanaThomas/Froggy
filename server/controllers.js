require('dotenv').config();
const axios = require('axios');
const models = require('./models.js');

const URL = process.env.API_URL;
const options = { method: 'GET' };

module.exports = {
  userLoginGet: (req, res) => {
    models.userLoginGet(req.query.user, req.query.password)
      .then(({ user, drinks }) => res.status(200).send({ user, drinks }))
      .catch(() => res.sendStatus(404));
  },

  userGet: (req, res) => {
    console.log(req.query);
    models.userGet(req.query.user)
      .then((result) => res.status(200).send(result.drinks))
      .catch(() => res.sendStatus(404));
  },

  userPost: (req, res) => {
    models.userPost(req.body)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(404));
  },

  userPatch: (req, res) => {
    models.userPatch(req.body)
      .then(() => res.sendStatus(203))
      .catch(() => res.sendStatus(404));
  },

  userDelete: (req, res) => {
    models.userDelete(req.body.drinkData)
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(404));
  },

  searchByName: (req, res) => {
    options.url = `${URL}search.php?${Object.keys(req.query)}=${req.query.s}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  searchByFirstLetter: (req, res) => {
    options.url = `${URL}search.php?${Object.keys(req.query)}=${req.query.f}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  searchIngredientInfo: (req, res) => {
    options.url = `${URL}search.php?${Object.keys(req.query)}=${req.query.i}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data.ingredients[0]))
      .catch(() => res.sendStatus(404));
  },

  searchByID: (req, res) => {
    options.url = `${URL}lookup.php?${Object.keys(req.query)}=${req.query.i}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  searchByIngredientID: (req, res) => {
    options.url = `${URL}lookup.php?${Object.keys(req.query)}=${req.query.iid}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  searchIngredient: (req, res) => {
    options.url = `${URL}filter.php?${Object.keys(req.query)}=${req.query.i}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  randomCocktail: (req, res) => {
    options.url = `${URL}random.php`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  randomCocktails: (req, res) => {
    options.url = `${URL}randomselection.php`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  popularCocktails: (req, res) => {
    options.url = `${URL}popular.php`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  latestCocktails: (req, res) => {
    options.url = `${URL}latest.php`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  filterMultiIngredient: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${req.query.i}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  filterAlcoholic: (req, res) => {
    options.url = `${URL}filter.php?${Object.keys(req.query)}=${req.query.a}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  filterCategory: (req, res) => {
    options.url = `${URL}filter.php?${Object.keys(req.query)}=${req.query.c}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  filterGlass: (req, res) => {
    options.url = `${URL}filter.php?${Object.keys(req.query)}=${req.query.g}`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  listCategories: (req, res) => {
    options.url = `${URL}list.php?${Object.keys(req.query)}=list`;
    axios.request(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },

  getIngredientImage: (req, res) => {
    options.url = `http://www.thecocktaildb.com/images/ingredients/${req.query.i}-Small.png`;
    axios.get('http://www.thecocktaildb.com/images/ingredients/gin-Small.png')
      .then(({ data }) => res.status(200).send(data))
      .catch(() => res.sendStatus(404));
  },
};
