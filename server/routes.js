const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/userLogin', controllers.userLoginGet);
router.get('/user', controllers.userGet);
router.post('/user', controllers.userPost);
router.patch('/user', controllers.userPatch);
router.delete('/user', controllers.userDelete);

router.get('/searchByName', controllers.searchByName);
router.get('/searchByFirstLetter', controllers.searchByFirstLetter);
router.get('/searchIngredientInfo', controllers.searchIngredientInfo);
router.get('/searchByID', controllers.searchByID);
// router.get('/searchByIngredientID', controllers.searchByIngredientID);
// router.get('/searchIngredient', controllers.searchIngredient);

router.get('/randomCocktail', controllers.randomCocktail);
// router.get('/randomCocktails', controllers.randomCocktails);
router.get('/popularCocktails', controllers.popularCocktails);
router.get('/latestCocktails', controllers.latestCocktails);

router.get('/filterMultiIngredient', controllers.filterMultiIngredient);
router.get('/filterAlcoholic', controllers.filterAlcoholic);
router.get('/filterCategory', controllers.filterCategory);
router.get('/filterGlass', controllers.filterGlass);

router.get('/listCategories', controllers.listCategories);

// router.get('/getIngredientImage', controllers.getIngredientImage);

module.exports = router;
