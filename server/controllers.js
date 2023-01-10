require('dotenv').config();
const axios = require('axios');
// const models = require('./models.js');

const options = {
  method: 'GET',
};

module.exports = {
  searchByName: (req, res) => {
    options.url = `${process.env.API_URL}search.php?${Object.keys(req.query)}=${
      req.query.s
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchByFirstLetter: (req, res) => {
    options.url = `${process.env.API_URL}search.php?${Object.keys(req.query)}=${
      req.query.f
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchByIngredientName: (req, res) => {
    options.url = `${process.env.API_URL}search.php?${Object.keys(req.query)}=${
      req.query.i
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchByID: (req, res) => {
    options.url = `${process.env.API_URL}lookup.php?${Object.keys(req.query)}=${
      req.query.i
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchByIngredientID: (req, res) => {
    options.url = `${process.env.API_URL}lookup.php?${Object.keys(req.query)}=${
      req.query.iid
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  searchIngredient: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${
      req.query.i
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  randomCocktail: (req, res) => {
    options.url = `${process.env.API_URL}random.php`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  randomCocktails: (req, res) => {
    options.url = `${process.env.API_URL}randomselection.php`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  popularCocktails: (req, res) => {
    options.url = `${process.env.API_URL}popular.php`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  latestCocktails: (req, res) => {
    options.url = `${process.env.API_URL}latest.php`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterMultiIngredient: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${
      req.query.i
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterAlcoholic: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${
      req.query.a
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterCategory: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${
      req.query.c
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  filterGlass: (req, res) => {
    options.url = `${process.env.API_URL}filter.php?${Object.keys(req.query)}=${
      req.query.g
    }`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },

  listCategories: (req, res) => {
    options.url = `${process.env.API_URL}list.php?${Object.keys(
      req.query,
    )}=list`;
    axios
      .request(options)
      .then((response) => res.status(200).send(response.data))
      .catch(() => res.sendStatus(404));
  },
};
