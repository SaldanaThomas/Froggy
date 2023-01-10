const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/searchByName', controllers.searchByName);
router.get('/searchByIngredient', controllers.searchByIngredient);
router.get('/lookUpRandom', controllers.lookUpRandom);
router.get('/lookUpCocktailByID', controllers.lookUpCocktailByID);
router.get('/lookUpIngredientByID', controllers.lookUpIngredientByID);
router.get('/lookUpRandomSelection', controllers.lookUpRandomSelection);
router.get('/filterCategory', controllers.filterCategory);
router.get('/filterAlcoholic', controllers.filterAlcoholic);
router.get('/filterGlass', controllers.filterGlass);
router.get('/filterMultiIngredient', controllers.filterMultiIngredient);
router.get('/listIngredients', controllers.listIngredients);
router.get('/listAlcoholic', controllers.listAlcoholic);
router.get('/listGlass', controllers.listGlass);
router.get('/listCategories', controllers.listCategories);
router.get('/listPopularCocktails', controllers.listPopularCocktails);
router.get('/listLatestCocktails', controllers.listLatestCocktails);

module.exports = router;
