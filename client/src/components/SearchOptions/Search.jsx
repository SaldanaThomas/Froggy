import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchDropDown from './SearchDropDown.jsx';
import letters from '../../utility/letters.js';
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
  searchRandom,
}) => {
  return (
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
        <Grid item xs={3}><FeelingFroggy search={searchRandom} /></Grid>
        <Grid item xs={3}><ThePond /></Grid>
        <Grid item xs={3}><SaveTheFrogs /></Grid>
      </Grid>
    </Box>
  );
};

export default Search;
