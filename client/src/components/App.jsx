import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Drinks from './Drinks.jsx';
import Categories from './Categories.jsx';
import Ingredients from './Ingredients.jsx';
import Alcoholic from './Alcoholic.jsx';
import Glass from './Glass.jsx';

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

  return (
    <div>
      <h1>Froggy Cocktails</h1>
      <h3>Categories</h3>
      <select>
        {categories.map((category, index) => <Categories filter={category} key={index} />)}
      </select>
      <h3>Ingredients</h3>
      <select>
        {ingredients.map((ingredient, index) => <Ingredients filter={ingredient} key={index} />)}
      </select>
      <h3>Alcoholic</h3>
      <select>
        {alcoholic.map((content, index) => <Alcoholic filter={content} key={index} />)}
      </select>
      <h3>Glass</h3>
      <select>
        {glass.map((type, index) => <Glass filter={type} key={index} />)}
      </select>
      {popularDrinks.length && <Overview drink={popularDrinks[0]} />}
      <h2>Popular Drinks</h2>
      {popularDrinks.map((drink, index) => {
        return index === 0 ? null : <Drinks drink={drink} key={index} />}
      )}
      <div>Other stuff</div>
      <h2>Latest Drinks</h2>
      {latestDrinks.map((drink, index) => <Drinks drink={drink} key={index} />)}
      <div>Other stuff</div>
    </div>
  );
}

export default App;
