import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import requests from '../utility/requests.js';
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
  const [query, setQuery] = useState('');

  const updatePageInfo = (filterDetails, drinks) => {
    if (drinks.length) {
      requests.getDrinkByID(drinks[0], (drink) => {
        setCurrentDrink(drink);
        setFilter(filterDetails);
        setFilteredDrinks(drinks);
      });
    } else {
      window.alert('No results found');
    }
  };

  const getUserDrinks = (username) => {
    requests.getUserDrinks(username, (drinks) => setUserDrinks(drinks));
  };

  const getDrinks = () => {
    requests.getRandomCocktail((drink) => setCurrentDrink(drink));
    requests.getPopularCocktails((drinks) => setPopularDrinks(drinks));
    requests.getLatestCocktails((drinks) => setLatestDrinks(drinks));
    requests.getCategories((items) => setCategories(items));
    requests.getIngredients((items) => setIngredients(items));
    requests.getAlcoholContent((items) => setAlcoholic(items));
    requests.getGlassType((items) => setGlass(items));
  };

  const viewDrink = (drink) => setCurrentDrink(drink);

  const getDrinkByID = (item) => requests.getDrinkByID(item, (drink) => setCurrentDrink(drink));

  const searchCategory = (criteria) => {
    requests.searchCategory(criteria, (drinks) => updatePageInfo(`Category: ${criteria}`, drinks));
  };

  const searchIngredient = (criteria) => {
    requests.searchIngredient(criteria, (drinks) => updatePageInfo(`Ingredient: ${criteria}`, drinks));
  };

  const searchAlcoholContent = (criteria) => {
    requests.searchAlcoholContent(criteria, (drinks) => updatePageInfo(`Alcohol: ${criteria}`, drinks));
  };

  const searchGlassType = (criteria) => {
    requests.searchGlassType(criteria, (drinks) => updatePageInfo(`Glass Type: ${criteria}`, drinks));
  };

  const searchLetter = (letter) => {
    requests.searchLetter(letter, (drinks) => updatePageInfo(`Starts With: "${letter.toUpperCase()}"`, drinks));
  };

  const searchQuery = () => {
    if (query) {
      requests.searchQuery(query.toLowerCase(), (drinks) => updatePageInfo(`Results for: "${query.toUpperCase()}"`, drinks));
      setQuery('');
    }
  };

  useEffect(() => getDrinks(), []);

  return (
    <div>
      <Background />
      <div className="mainHeader">
        <img src={logo} alt="logo" />
        <Login
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setUserDrinks={setUserDrinks}
        />
      </div>
      <Search
        categories={categories}
        ingredients={ingredients}
        alcoholic={alcoholic}
        glass={glass}
        searchCategory={searchCategory}
        searchIngredient={searchIngredient}
        searchAlcoholContent={searchAlcoholContent}
        searchGlassType={searchGlassType}
        searchLetter={searchLetter}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input id="searchField" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="searchFieldButton" type="button" onClick={searchQuery}>
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
      <h2 className="carouselHeader">{filter}</h2>
      ))
        || (userDrinks.length && (<h2 className="carouselHeader">Your Drinks</h2>))
        || null}
      {(filteredDrinks.length && (
        <Carousel navButtonsAlwaysInvisible>
          {filteredDrinks.map((drink, index) => (
            <Drinks drink={drink} viewDrink={getDrinkByID} key={`${drink.strName + index}`} />
          ))}
        </Carousel>
      ))
        || (userDrinks.length && (
          <Carousel navButtonsAlwaysInvisible>
            {userDrinks.map((drink, index) => (
              <Drinks drink={drink} viewDrink={getDrinkByID} key={`${drink.strName + index}`} />
            ))}
          </Carousel>
        ))
        || null}
      <h2 className="carouselHeader">Popular Drinks</h2>
      <Carousel navButtonsAlwaysInvisible>
        {popularDrinks.map((drink, index) => (
          <Drinks drink={drink} viewDrink={viewDrink} key={`${drink.strName + index}`} />
        ))}
      </Carousel>
      <h2 className="carouselHeader">Latest Drinks</h2>
      <Carousel navButtonsAlwaysInvisible>
        {latestDrinks.map((drink, index) => (
          <Drinks drink={drink} viewDrink={viewDrink} key={`${drink.strName + index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
