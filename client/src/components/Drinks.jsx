import React from 'react';
import { Paper, Button } from '@mui/material';

const Drinks = ({ drink, viewDrink }) => {
  const handleClick = (e) => {
    e.preventDefault();
    viewDrink(drink);
  };

  return (
    <>
      <Paper
        style={{
          backgroundColor: 'rgba(0,0,0,0.1)',
          marginLeft: '25%',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyPress={handleClick}
        >
          <div style={{ textAlign: 'center' }}>{drink.strDrink}</div>
          <img src={`${drink.strDrinkThumb}/preview`} alt="drink" />
        </div>
      </Paper>
      <Button
        style={{ alignText: 'center', color: 'teal', width: '100%' }}
        className="CheckButton"
      >
        Check it out!
      </Button>
    </>
  );
};

export default Drinks;
