import React from 'react';

const Overview = ({ drink }) => {
  console.log(drink);
  return (
    <div>
      <div>{drink.strDrink}</div>
      <img src={drink.strDrinkThumb} alt="drink" />
      <div>{drink.strInstructions}</div>
      <div>{drink.strTags}</div>
    </div>
  );
};

export default Overview;
