import React from 'react';

const Categories = ({ filter }) => {
  return (
    <option>
      {filter.strCategory}
    </option>
  );
};

export default Categories;
