import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Categories from './Categories.jsx';
import Ingredients from './Ingredients.jsx';
import Alcoholic from './Alcoholic.jsx';
import Glass from './Glass.jsx';
import Letter from './Letter.jsx';

const Search = ({
  categories,
  ingredients,
  alcoholic,
  glass,
  getCategoryRelated,
  getIngredientRelated,
  getAlcoholRelated,
  getGlassRelated,
  getByLetter,
}) => {
  return (
    <Box style={{ color: 'teal' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Categories categories={categories} getRelated={getCategoryRelated} />
        </Grid>
        <Grid item xs={2}>
          <Ingredients
            ingredients={ingredients}
            getRelated={getIngredientRelated}
          />
        </Grid>
        <Grid item xs={2}>
          <Alcoholic alcoholic={alcoholic} getRelated={getAlcoholRelated} />
        </Grid>
        <Grid item xs={2}>
          <Glass glass={glass} getRelated={getGlassRelated} />
        </Grid>
        <Grid item xs={2}>
          <Letter getRelated={getByLetter} />
        </Grid>
        <Grid item xs={2}>
          <div>The Pond</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
