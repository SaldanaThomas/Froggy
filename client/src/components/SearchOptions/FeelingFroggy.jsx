import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { setCurrentDrink } from '../../redux/appSlice.js';
import requests from '../../utility/requests.js';

const FeelingFroggy = () => {
  const dispatch = useDispatch();
  const searchRandom = () => {
    requests.getRandomCocktail((drink) => dispatch(setCurrentDrink(drink)));
  };

  return (
    <div>
      <Button
        style={{ color: 'aquamarine' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={searchRandom}
      >
        Feeling Froggy
      </Button>
    </div>
  );
};

export default FeelingFroggy;
