import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Overview from './Overview.jsx';
import Drinks from './Drinks.jsx';
import Categories from './Categories.jsx';
import Ingredients from './Ingredients.jsx';
import Alcoholic from './Alcoholic.jsx';
import Glass from './Glass.jsx';

function App() {
  const [currentDrink, setCurrentDrink] = useState([]);
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [glass, setGlass] = useState([]);

  const getDrinks = () => {
    axios.get('/randomCocktail')
      .then(({ data }) => setCurrentDrink(data.drinks[0]))
      .catch((err) => console.error(err));
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

  const viewDrink = (drink) => {
    setCurrentDrink(drink);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div>
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
      </div>
      <select>
        {glass.map((type, index) => <Glass filter={type} key={index} />)}
      </select>
      {popularDrinks.length && <Overview drink={currentDrink} />}
      <h2>Popular Drinks</h2>
      <Carousel>
        {popularDrinks.map((drink, index) => (
          <Drinks drink={drink} viewDrink={viewDrink} key={index} />
        ))}
      </Carousel>
      <h2>Latest Drinks</h2>
      <Carousel>
        {latestDrinks.map((drink, index) => (
          <Drinks drink={drink} viewDrink={viewDrink} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
