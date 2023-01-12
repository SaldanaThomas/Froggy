import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import Background from './Background.jsx';
import Login from './Login.jsx';
import Search from './SearchOptions/Search.jsx';
import Overview from './Overview.jsx';
import Drinks from './Drinks.jsx';
import logo from '../assets/Frog.png';

function App() {
  const [currentDrink, setCurrentDrink] = useState({});
  const [currentUser, setCurrentUser] = useState('');
  const [userDrinks, setUserDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filter, setFilter] = useState('');
  const [popularDrinks, setPopularDrinks] = useState([]);
  const [latestDrinks, setLatestDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [glass, setGlass] = useState([]);

  const getUserDrinks = (user) => {
    axios
      .get('/user', { params: { user } })
      .then(({ data }) => {
        if (Object.keys(data.drinks).length) {
          setUserDrinks(data.drinks);
        }
        if (data.user) {
          setCurrentUser(data.user);
        }
      })
      .catch((err) => console.error(err));
  };

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
    axios
      .get(`/searchByID?i=${drink.idDrink}`)
      .then(({ data }) => {
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

  console.log(userDrinks);
  console.log(currentUser);

  return (
    <div>
      <Background />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignText: 'center',
        }}
      >
        <img src={logo} alt="logo" />
        <Login getUserDrinks={getUserDrinks} />
      </div>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          style={{
            width: '38%',
            backgroundColor: '#e8ba7d',
            paddingTop: '10px',
          }}
          id="searchField"
        />
        <button
          type="button"
          style={{ backgroundColor: '#e8ba7d' }}
          onClick={getByInput}
        >
          SEARCH FOR A DRINK
        </button>
      </div>
      <Overview
        drink={currentDrink}
        userDrinks={userDrinks}
        currentUser={currentUser}
        getUserDrinks={getUserDrinks}
      />
      {(filteredDrinks.length && (
        <h2
          style={{
            textAlign: 'center',
            color: '#e6b363',
            fontSize: 'xx-large',
            marginBottom: '2px',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: 'black',
          }}
        >
          {filter}
        </h2>
      )) || (userDrinks.length && (
      <h2
        style={{
          textAlign: 'center',
          color: '#e6b363',
          fontSize: 'xx-large',
          marginBottom: '2px',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'black',
        }}
      >
        Your Drinks
      </h2>
      ))
        || null}
      {(filteredDrinks.length && (
        <Carousel
          navButtonsAlwaysVisible
          navButtonsProps={{
            style: {
              navButtonsAlwaysVisible: true,
            },
          }}
        >
          {filteredDrinks.map((drink, index) => (
            <Drinks
              drink={drink}
              viewDrink={getDrinkByID}
              key={`${drink.strName + index}`}
            />
          ))}
        </Carousel>
      ))
        || (userDrinks.length && (
          <Carousel
            navButtonsAlwaysVisible
            navButtonsProps={{
              style: {
                navButtonsAlwaysVisible: true,
              },
            }}
          >
            {userDrinks.map((drink, index) => (
              <Drinks
                drink={drink}
                viewDrink={getDrinkByID}
                key={`${drink.strName + index}`}
              />
            ))}
          </Carousel>
        ))
        || null}
      <h2
        style={{
          textAlign: 'center',
          color: '#e6b363',
          fontSize: 'xx-large',
          marginBottom: '2px',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'black',
        }}
      >
        Popular Drinks
      </h2>
      <Carousel navButtonsAlwaysVisible>
        {popularDrinks.map((drink, index) => (
          <Drinks
            drink={drink}
            viewDrink={viewDrink}
            key={`${drink.strName + index}`}
          />
        ))}
      </Carousel>
      <h2
        style={{
          textAlign: 'center',
          color: '#e6b363',
          fontSize: 'xx-large',
          marginBottom: '2px',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'black',
        }}
      >
        Latest Drinks
      </h2>
      <Carousel navButtonsAlwaysVisible>
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
