import React from 'react';
import { Paper, Button } from '@mui/material';

const Drinks = ({ drink, viewDrink }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scroll({ top: -Math.abs(document.body.scrollHeight), left: 0, behavior: 'smooth' });
    viewDrink(drink);
  };

  const searchProduct = () => {
    window.open(`http://www.google.com/search?q=${drink.strDrink}`);
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
          alignText: 'center',
          color: 'aquamarine',
          padding: '0px',
          width: '100%',
        }}
        className="CheckButton"
        onClick={searchProduct}
      >
        Check it out!
      </Button>
    </>
  );
};

export default Drinks;
