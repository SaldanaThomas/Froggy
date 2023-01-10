require('dotenv').config();
const axios = require('axios');
// const models = require('./models.js');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST,
  },
};

module.exports = {
  searchByName: (req, res) => {
    options.url = `${process.env.API_URL}search.php`;
    options.params = { s: 'vodka' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchByIngredient: (req, res) => {
    options.url = `${process.env.API_URL}filter.php`;
    options.params = { i: 'gin' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  lookUpRandom: (req, res) => {
    options.url = `${process.env.API_URL}random.php`;
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  lookUpCocktailByID: (req, res) => {
    options.url = `${process.env.API_URL}lookup.php`;
    options.params = { i: '11007' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  lookUpIngredientByID: (req, res) => {
    options.url = `${process.env.API_URL}lookup.php`;
    options.params = { iid: '552' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  lookUpRandomSelection: (req, res) => {
    options.url = `${process.env.API_URL}randomselection.php`;
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterCategory: (req, res) => {
    options.url = `${process.env.API_URL}filter.php`;
    options.params = { c: 'Cocktail' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterAlcoholic: (req, res) => {
    options.url = `${process.env.API_URL}filter.php`;
    options.params = { a: 'Alcoholic' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  // not working???
  filterGlass: (req, res) => {
    options.url = `${process.env.API_URL}filter.php`;
    options.params = { c: 'Cocktail_glass' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterMultiIngredient: (req, res) => {
    options.url = `${process.env.API_URL}filter.php`;
    options.params = { i: 'Dry_Vermouth,Gin,Anis' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  // not working???
  listIngredients: (req, res) => {
    options.url = `${process.env.API_URL}list.php`;
    options.params = { i: 'list' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  // not working???
  listAlcoholic: (req, res) => {
    options.url = `${process.env.API_URL}list.php`;
    options.params = { a: 'list' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },
  // not working???
  listGlass: (req, res) => {
    options.url = `${process.env.API_URL}list.php`;
    options.params = { g: 'list' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  // not working???
  listCategories: (req, res) => {
    options.url = `${process.env.API_URL}list.php`;
    options.params = { c: 'list' };
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  listPopularCocktails: (req, res) => {
    options.url = `${process.env.API_URL}popular.php`;
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  listLatestCocktails: (req, res) => {
    options.url = `${process.env.API_URL}latest.php`;
    axios.request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },
};
