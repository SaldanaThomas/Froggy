import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    axios.get('/searchByIngredient')
      .then(({ data }) => setDrinks(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  console.log(drinks);

  return (
    <div>
      <h1>Froggy Cocktails</h1>
      <div>Search Options</div>
      <div>Primary Drink</div>
      <div>Ingredients</div>
      <div>Other drinks</div>
      <div>Other stuff</div>
    </div>
  );
}

export default App;
