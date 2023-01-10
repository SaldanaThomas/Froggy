import React from 'react';

const Ingredients = ({ filter }) => {
  return (
    <option>
      {filter.strIngredient1}
    </option>
  );
};

export default Ingredients;
