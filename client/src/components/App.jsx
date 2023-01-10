import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [glass, setGlass] = useState([]);

  const getDrinks = () => {
    axios.get('/popularCocktails')
      .then(({ data }) => setPopularDrinks(data.drinks))
      .catch((err) => console.error(err));
    axios.get('/latestCocktails')
      .then(({ data }) => setLatestDrinks(data.drinks))
      .catch((err) => console.error(err));
    axios.get('/listCategories?c=list')
      .then(({ data }) => setCategories(data.drinks))
      .catch((err) => console.error(err));
    axios.get('/listCategories?i=list')
      .then(({ data }) => setIngredients(data.drinks))
      .catch((err) => console.error(err));
    axios.get('/listCategories?a=list')
      .then(({ data }) => setAlcoholic(data.drinks))
      .catch((err) => console.error(err));
    axios.get('/listCategories?g=list')
      .then(({ data }) => setGlass(data.drinks))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  console.log(latestDrinks);
  console.log(categories);
  console.log(ingredients);
  console.log(glass);

  return (
    <div>
      <h1>Froggy Cocktails</h1>
      <div>Search Options</div>
      {popularDrinks.length ? <h2>{popularDrinks[0].strDrink}</h2> : null}
      {popularDrinks.length ? <img src={popularDrinks[0].strDrinkThumb} alt="drink" /> : null}
      <div>Ingredients</div>
      <div>Other drinks</div>
      <div>Other stuff</div>
    </div>
  );
}

export default App;

// idDrink
// strAlcoholic
// strCategory
// strDrink
// strDrinkThumb
// strGlass
// strIBA
// strIngredientX
// strInstructions
// strMeasureX
