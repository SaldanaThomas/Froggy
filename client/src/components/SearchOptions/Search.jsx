import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Categories from './Categories.jsx';
import Ingredients from './Ingredients.jsx';
import Alcohol from './Alcohol.jsx';
import Glass from './Glass.jsx';
import Letter from './Letter.jsx';
import FeelingFroggy from './FeelingFroggy.jsx';
import ThePond from './ThePond.jsx';
import SaveTheFrogs from './SaveTheFrogs.jsx';

const Search = ({
  categories,
  ingredients,
  alcoholic,
  glass,
  searchCategory,
  searchIngredient,
  searchAlcoholContent,
  searchGlassType,
  searchLetter,
}) => {
  return (
    <Box style={{ color: 'aquamarine', textAlign: 'center' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Categories categories={categories} getRelated={searchCategory} />
        </Grid>
        <Grid item xs={3}>
          <Ingredients ingredients={ingredients} getRelated={searchIngredient} />
        </Grid>
        <Grid item xs={3}><Alcohol alcoholic={alcoholic} getRelated={searchAlcoholContent} /></Grid>
        <Grid item xs={3}><Glass glass={glass} getRelated={searchGlassType} /></Grid>
        <Grid item xs={3}><Letter getRelated={searchLetter} /></Grid>
        <Grid item xs={3}><FeelingFroggy /></Grid>
        <Grid item xs={3}><ThePond /></Grid>
        <Grid item xs={3}><SaveTheFrogs /></Grid>
      </Grid>
    </Box>
  );
};

export default Search;
