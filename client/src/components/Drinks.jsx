import React from 'react';
import { Paper, Button } from '@mui/material';

const Drinks = ({ drink }) => {
  return (
    <Paper>
      <div>{drink.strDrink}</div>
      <img src={drink.strDrinkThumb + '/preview'} alt="drink" />
      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  );
};

export default Drinks;
