import React from 'react';

const Alcoholic = ({ filter }) => {
  return (
    <option>
      {filter.strAlcoholic}
    </option>
  );
};

export default Alcoholic;
