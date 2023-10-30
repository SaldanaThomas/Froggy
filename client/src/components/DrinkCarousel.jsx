import React from 'react';
import { useDispatch } from 'react-redux';
import { Paper, Button } from '@mui/material';
import { setCurrentDrink } from '../redux/appSlice.js';
import requests from '../utility/requests.js';

const DrinkCarousel = ({ drink, missingData }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    window.scroll({ top: -Math.abs(document.body.scrollHeight), left: 0, behavior: 'smooth' });
    if (missingData) requests.getDrinkByID(drink, (data) => dispatch(setCurrentDrink(data)));
    else dispatch(setCurrentDrink(drink));
  };

  return (
    <>
      <Paper
        style={{
          backgroundColor: '#281973EE',
          color: '#e6b363',
          marginLeft: '25%',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div role="button" tabIndex={0} onClick={handleClick} onKeyPress={handleClick}>
          <div style={{ textAlign: 'center' }}>{drink.strDrink}</div>
          <img src={`${drink.strDrinkThumb}/preview`} alt="drink" />
        </div>
      </Paper>
      <Button
        style={{
          alignText: 'center', color: 'aquamarine', padding: '0px', width: '100%',
        }}
        className="CheckButton"
        onClick={() => window.open(`http://www.google.com/search?q=${drink.strDrink}`)}
      >
        Check it out!
      </Button>
    </>
  );
};

export default DrinkCarousel;
