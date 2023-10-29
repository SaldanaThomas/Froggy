import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import {
  setCurrentUser, setCurrentDrink, setUserDrinks, setPopularDrinks, setLatestDrinks,
  setCategories, setIngredients, setAlcoholic, setGlass, setFilter, setFilteredDrinks, setQuery,
} from '../redux/appSlice.js';
import requests from '../utility/requests.js';
import Background from './Background.jsx';
import Login from './Login.jsx';
import Search from './SearchOptions/Search.jsx';
import Overview from './Overview.jsx';
import Drinks from './Drinks.jsx';
import Logo from '../assets/Frog.png';

const App = () => {
  const {
    userDrinks, filter, filteredDrinks, popularDrinks, latestDrinks, query,
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const updatePageInfo = (filterDetails, drinks) => {
    if (drinks.length) {
      requests.getDrinkByID(drinks[0], (drink) => {
        dispatch(setCurrentDrink(drink));
        dispatch(setFilter(filterDetails));
        dispatch(setFilteredDrinks(drinks));
      });
    } else {
      window.alert('No results found');
    }
  };

  const getDrinks = () => {
    requests.getRandomCocktail((drink) => dispatch(setCurrentDrink(drink)));
    requests.getPopularCocktails((drinks) => dispatch(setPopularDrinks(drinks)));
    requests.getLatestCocktails((drinks) => dispatch(setLatestDrinks(drinks)));
    requests.getCategories((items) => dispatch(setCategories(items)));
    requests.getIngredients((items) => dispatch(setIngredients(items)));
    requests.getAlcoholContent((items) => dispatch(setAlcoholic(items)));
    requests.getGlassType((items) => dispatch(setGlass(items)));
    const loggedIn = localStorage.getItem('logged in');
    if (loggedIn) {
      dispatch(setCurrentUser(loggedIn));
      requests.getUser(loggedIn, (drinks) => dispatch(setUserDrinks(drinks)));
    }
  };

  const searchQuery = () => {
    if (query) {
      requests.searchQuery(query.toLowerCase(), (drinks) => updatePageInfo(`Results for: "${query.toUpperCase()}"`, drinks));
      dispatch(setQuery(''));
    }
  };

  useEffect(() => getDrinks(), []);

  return (
    <div>
      <Background />
      <div className="mainHeader">
        <img src={Logo} alt="logo" style={{ width: '35%' }} />
        <Login />
      </div>
      <Search />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input id="searchField" value={query} onChange={(e) => dispatch(setQuery(e.target.value))} />
        <button className="searchFieldButton" type="button" onClick={searchQuery}>
          SEARCH FOR A DRINK
        </button>
      </div>
      <Overview />
      {(filteredDrinks.length && (<h2 className="carouselHeader">{filter}</h2>))
        || (userDrinks.length && (<h2 className="carouselHeader">Your Drinks</h2>))
        || null}
      {(filteredDrinks.length && (
        <Carousel navButtonsAlwaysInvisible>
          {filteredDrinks.map((drink, index) => <Drinks drink={drink} missingData key={`${drink.strName + index}`} />)}
        </Carousel>
      ))
        || (userDrinks.length && (
          <Carousel navButtonsAlwaysInvisible>
            {userDrinks.map((drink, index) => <Drinks drink={drink} missingData key={`${drink.strName + index}`} />)}
          </Carousel>
        ))
        || null}
      <h2 className="carouselHeader">Popular Drinks</h2>
      <Carousel navButtonsAlwaysInvisible>
        {popularDrinks.map((drink, index) => <Drinks drink={drink} key={`${drink.strName + index}`} />)}
      </Carousel>
      <h2 className="carouselHeader">Latest Drinks</h2>
      <Carousel navButtonsAlwaysInvisible>
        {latestDrinks.map((drink, index) => <Drinks drink={drink} key={`${drink.strName + index}`} />)}
      </Carousel>
    </div>
  );
};

export default App;
