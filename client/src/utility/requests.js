import axios from 'axios';

const requests = {
  getUserLogin: (user, password, callback) => {
    axios.get('/userLogin', { params: { user, password } })
      .then(({ data }) => callback(data.user, data.drinks))
      .catch((err) => console.error(err));
  },

  getUserDrinks: (user, callback) => {
    axios.get('/user', { params: { user } })
      .then(({ data }) => callback(data.drinks))
      .catch((err) => console.error(err));
  },

  addUser: (user, password, callback) => {
    axios.post('/user', { user, password, drinks: [] })
      .then(() => callback(true))
      .catch(() => callback(false));
  },

  getDrinkByID: (drink, callback) => {
    axios.get(`/searchByID?i=${drink.idDrink}`)
      .then(({ data }) => callback(data.drinks[0]))
      .catch((err) => console.error(err));
  },

  getRandomCocktail: (callback) => {
    axios.get('/randomCocktail')
      .then(({ data }) => callback(data.drinks[0]))
      .catch((err) => console.error(err));
  },

  getPopularCocktails: (callback) => {
    axios.get('/popularCocktails')
      .then(({ data }) => callback(data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  getLatestCocktails: (callback) => {
    axios.get('/latestCocktails')
      .then(({ data }) => callback(data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  getCategories: (callback) => {
    axios.get('/listCategories?c=list')
      .then(({ data }) => callback(data.drinks))
      .catch((err) => console.error(err));
  },

  getIngredients: (callback) => {
    axios.get('/listCategories?i=list')
      .then(({ data }) => callback(data.drinks))
      .catch((err) => console.error(err));
  },

  getAlcoholContent: (callback) => {
    axios.get('/listCategories?a=list')
      .then(({ data }) => callback(data.drinks))
      .catch((err) => console.error(err));
  },

  getGlassType: (callback) => {
    axios.get('/listCategories?g=list')
      .then(({ data }) => callback(data.drinks))
      .catch((err) => console.error(err));
  },

  searchCategory: (criteria, callback) => {
    axios.get(`/filterCategory?c=${criteria}`)
      .then(({ data }) => callback(typeof data.drinks === 'string' ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  searchIngredient: (criteria, callback) => {
    axios.get(`/filterMultiIngredient?i=${criteria}`)
      .then(({ data }) => callback(typeof data.drinks === 'string' ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  searchAlcoholContent: (criteria, callback) => {
    axios.get(`/filterAlcoholic?a=${criteria}`)
      .then(({ data }) => callback(typeof data.drinks === 'string' ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  searchGlassType: (criteria, callback) => {
    axios.get(`/filterGlass?g=${criteria}`)
      .then(({ data }) => callback(typeof data.drinks === 'string' ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  searchLetter: (letter, callback) => {
    axios.get(`/searchByFirstLetter?f=${letter}`)
      .then(({ data }) => callback(data.drinks === null ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },

  searchQuery: (input, callback) => {
    axios.get(`/searchByName?s=${input}`)
      .then(({ data }) => callback(data.drinks === null ? [] : data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
  },
};

export default requests;
