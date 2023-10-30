import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  setCurrentDrink, setFilter, setFilteredDrinks, setQuery,
} from '../redux/appSlice.js';
import requests from '../utility/requests.js';
import SearchDropDown from './SearchOptions/SearchDropDown.jsx';
import letters from '../utility/letters.js';
import FeelingFroggy from './SearchOptions/FeelingFroggy.jsx';
import ThePond from './SearchOptions/ThePond.jsx';
import SaveTheFrogs from './SearchOptions/SaveTheFrogs.jsx';

const Search = () => {
  const {
    categories, ingredients, alcoholic, glass, query,
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const updatePage = (filterDetails, drinks) => {
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

  const searchQuery = () => {
    if (query) {
      requests.searchQuery(query.toLowerCase(), (drinks) => updatePage(`Results for: "${query.toUpperCase()}"`, drinks));
      dispatch(setQuery(''));
    }
  };

  const searchCategory = (criteria) => {
    requests.searchCategory(criteria, (drinks) => updatePage(`Category: ${criteria}`, drinks));
  };

  const searchIngredient = (criteria) => {
    requests.searchIngredient(criteria, (drinks) => updatePage(`Ingredient: ${criteria}`, drinks));
  };

  const searchAlcoholContent = (criteria) => {
    requests.searchAlcoholContent(criteria, (drinks) => updatePage(`Alcohol: ${criteria}`, drinks));
  };

  const searchGlassType = (criteria) => {
    requests.searchGlassType(criteria, (drinks) => updatePage(`Glass Type: ${criteria}`, drinks));
  };

  const searchLetter = (letter) => {
    requests.searchLetter(letter, (drinks) => updatePage(`Starts With: "${letter.toUpperCase()}"`, drinks));
  };

  return (
    <>
      <Box style={{ color: 'aquamarine', textAlign: 'center' }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SearchDropDown category={categories} search={searchCategory} type="Categories" property="strCategory" />
          </Grid>
          <Grid item xs={3}>
            <SearchDropDown category={ingredients} search={searchIngredient} type="Ingredients" property="strIngredient1" />
          </Grid>
          <Grid item xs={3}>
            <SearchDropDown category={alcoholic} search={searchAlcoholContent} type="Alcohol Content" property="strAlcoholic" />
          </Grid>
          <Grid item xs={3}>
            <SearchDropDown category={glass} search={searchGlassType} type="Glass Type" property="strGlass" />
          </Grid>
          <Grid item xs={3}>
            <SearchDropDown category={letters} search={searchLetter} type="Search By Letter" property="letter" />
          </Grid>
          <Grid item xs={3}><FeelingFroggy /></Grid>
          <Grid item xs={3}><ThePond /></Grid>
          <Grid item xs={3}><SaveTheFrogs /></Grid>
        </Grid>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input id="searchField" value={query} onChange={(e) => dispatch(setQuery(e.target.value))} autoComplete="off" />
        <button className="searchFieldButton" type="button" onClick={searchQuery}>
          SEARCH FOR A DRINK
        </button>
      </div>
    </>
  );
};

export default Search;
