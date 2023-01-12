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
    <Box style={{ color: 'aquamarine' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Categories categories={categories} getRelated={getCategoryRelated} />
        </Grid>
        <Grid item xs={3}>
          <Ingredients
            ingredients={ingredients}
            getRelated={getIngredientRelated}
          />
        </Grid>
        <Grid item xs={3}>
          <Alcoholic alcoholic={alcoholic} getRelated={getAlcoholRelated} />
        </Grid>
        <Grid item xs={3}>
          <Glass glass={glass} getRelated={getGlassRelated} />
        </Grid>
        <Grid item xs={3}>
          <Letter getRelated={getByLetter} />
        </Grid>
        <Grid item xs={3}>
          <div
            style={{ fontSize: '15px', paddingTop: '10px', paddingLeft: '6px' }}
          >
            FEELING FROGGY
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{ fontSize: '15px', paddingTop: '10px', paddingLeft: '6px' }}
          >
            THE POND
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{ fontSize: '15px', paddingTop: '10px', paddingLeft: '6px' }}
          >
            SAVE THE FROGS
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
