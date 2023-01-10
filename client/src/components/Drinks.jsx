import React from 'react';
import { Paper, Button } from '@mui/material';

const Drinks = ({ drink, viewDrink }) => {
  const handleClick = (e) => {
    e.preventDefault();
    viewDrink(drink);
  };

  return (
    <Paper>
      <div onClick={handleClick}>
        <div>{drink.strDrink}</div>
        <img src={`${drink.strDrinkThumb}/preview`} alt="drink" />
      </div>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

export default Drinks;
