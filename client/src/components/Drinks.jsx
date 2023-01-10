import React, { useState } from 'react';

function Drinks({ drink }) {

  return (
    <div>
      <div>{drink.strDrink}</div>
      <img src={drink.strDrinkThumb + '/preview'} alt="drink" />
    </div>
  );
}

export default Drinks;
