const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/searchByName', controllers.searchByName); //
router.get('/searchByFirstLetter', controllers.searchByFirstLetter); //
router.get('/searchByIngredientName', controllers.searchByIngredientName);
router.get('/searchByID', controllers.searchByID); //
router.get('/searchByIngredientID', controllers.searchByIngredientID);
router.get('/searchIngredient', controllers.searchIngredient);

router.get('/randomCocktail', controllers.randomCocktail); //
router.get('/randomCocktails', controllers.randomCocktails);
router.get('/popularCocktails', controllers.popularCocktails); //
router.get('/latestCocktails', controllers.latestCocktails); //

router.get('/filterMultiIngredient', controllers.filterMultiIngredient); //
router.get('/filterAlcoholic', controllers.filterAlcoholic); //
router.get('/filterCategory', controllers.filterCategory); //
router.get('/filterGlass', controllers.filterGlass); //

router.get('/listCategories', controllers.listCategories); //

module.exports = router;
