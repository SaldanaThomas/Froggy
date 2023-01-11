import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Search from './SearchOptions/Search.jsx';
import Overview from './Overview.jsx';
import Drinks from './Drinks.jsx';
import logo from '../assets/Frog.png';

function App() {
  const [currentDrink, setCurrentDrink] = useState({});
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filter, setFilter] = useState('');
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [glass, setGlass] = useState([]);

  const getDrinks = () => {
    axios
      .get('/randomCocktail')
      .then(({ data }) => setCurrentDrink(data.drinks[0]))
      .catch((err) => console.error(err));
    axios
      .get('/popularCocktails')
      .then(({ data }) => setPopularDrinks(data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
    axios
      .get('/latestCocktails')
      .then(({ data }) => setLatestDrinks(data.drinks.slice(0, 20)))
      .catch((err) => console.error(err));
    axios
      .get('/listCategories?c=list')
      .then(({ data }) => setCategories(data.drinks))
      .catch((err) => console.error(err));
    axios
      .get('/listCategories?i=list')
      .then(({ data }) => setIngredients(data.drinks))
      .catch((err) => console.error(err));
    axios
      .get('/listCategories?a=list')
      .then(({ data }) => setAlcoholic(data.drinks))
      .catch((err) => console.error(err));
    axios
      .get('/listCategories?g=list')
      .then(({ data }) => setGlass(data.drinks))
      .catch((err) => console.error(err));
  };

  const viewDrink = (drink) => {
    setCurrentDrink(drink);
  };

  const getDrinkByID = (drink) => {
    console.log('id:', drink.idDrink);
    axios
      .get(`/searchByID?i=${drink.idDrink}`)
      .then(({ data }) => {
        console.log('result: ', data.drinks);
        setCurrentDrink(data.drinks[0]);
      })
      .catch((err) => console.error(err));
  };

  const getCategoryRelated = (criteria) => {
    if (typeof criteria === 'string') {
      axios
        .get(`/filterCategory?c=${criteria}`)
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) {
            getDrinkByID(data.drinks[0]);
            setFilter(`Category: ${criteria}`);
            setFilteredDrinks(data.drinks.slice(0, 20));
          } else {
            console.log('No Results');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const getIngredientRelated = (criteria) => {
    if (typeof criteria === 'string') {
      axios
        .get(`/filterMultiIngredient?i=${criteria}`)
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) {
            getDrinkByID(data.drinks[0]);
            setFilter(`Ingredient: ${criteria}`);
            setFilteredDrinks(data.drinks.slice(0, 20));
          } else {
            console.log('No Results');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const getAlcoholRelated = (criteria) => {
    if (typeof criteria === 'string') {
      axios
        .get(`/filterAlcoholic?a=${criteria}`)
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) {
            getDrinkByID(data.drinks[0]);
            setFilter(`Alcohol: ${criteria}`);
            setFilteredDrinks(data.drinks.slice(0, 20));
          } else {
            console.log('No Results');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const getGlassRelated = (criteria) => {
    if (typeof criteria === 'string') {
      axios
        .get(`/filterGlass?g=${criteria}`)
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) {
            getDrinkByID(data.drinks[0]);
            setFilter(`Glass Type: ${criteria}`);
            setFilteredDrinks(data.drinks.slice(0, 20));
          } else {
            console.log('No Results');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const getByLetter = (letter) => {
    axios
      .get(`/searchByFirstLetter?f=${letter}`)
      .then(({ data }) => {
        if (Array.isArray(data.drinks)) {
          getDrinkByID(data.drinks[0]);
          setFilter(`Starts With: "${letter.toUpperCase()}"`);
          setFilteredDrinks(data.drinks.slice(0, 20));
        } else {
          console.log('No Results');
        }
      })
      .catch((err) => console.error(err));
  };

  const getByInput = () => {
    event.preventDefault();
    const input = document.getElementById('searchField').value;
    if (input.length) {
      axios
        .get(`/searchByName?s=${input.toLowerCase()}`)
        .then(({ data }) => {
          if (Array.isArray(data.drinks)) {
            getDrinkByID(data.drinks[0]);
            setFilter(`Results for: "${input.toUpperCase()}"`);
            setFilteredDrinks(data.drinks.slice(0, 20));
          } else {
            console.log('No Results');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  // console.log(filteredDrinks);
  return (
    <div>
      <h1>
        Froggy Cocktails
        <img src={logo} alt="logo" />
      </h1>
      <Search
        categories={categories}
        ingredients={ingredients}
        alcoholic={alcoholic}
        glass={glass}
        getCategoryRelated={getCategoryRelated}
        getIngredientRelated={getIngredientRelated}
        getAlcoholRelated={getAlcoholRelated}
        getGlassRelated={getGlassRelated}
        getByLetter={getByLetter}
      />
      <input id="searchField" />
      <button type="button" onClick={getByInput}>
        SEARCH
      </button>
      <Overview drink={currentDrink} />
      {filteredDrinks.length ? <h2>{filter}</h2> : null}
      {filteredDrinks.length ? (
        <Carousel>
          {filteredDrinks.map((drink, index) => (
            <Drinks
              drink={drink}
              viewDrink={getDrinkByID}
              key={`${drink.strName + index}`}
            />
          ))}
        </Carousel>
      ) : null}
      <h2>Popular Drinks</h2>
      <Carousel>
        {popularDrinks.map((drink, index) => (
          <Drinks
            drink={drink}
            viewDrink={viewDrink}
            key={`${drink.strName + index}`}
          />
        ))}
      </Carousel>
      <h2>Latest Drinks</h2>
      <Carousel>
        {latestDrinks.map((drink, index) => (
          <Drinks
            drink={drink}
            viewDrink={viewDrink}
            key={`${drink.strName + index}`}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
