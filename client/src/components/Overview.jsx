import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Description from './Description.jsx';
import youtube from '../assets/YouTube.png';

const Overview = ({
  drink, userDrinks, currentUser, getUserDrinks,
}) => {
  const [render, setRender] = useState(false);
  const maxIngredients = new Array(15).fill(0);
  const drinkData = {
    user: currentUser,
    drink: {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
    },
  };

  useEffect(() => setRender(!render), [drink]);

  const addDrink = () => {
    axios.patch('/user', drinkData)
      .then(() => getUserDrinks(currentUser))
      .catch((err) => console.error(err));
  };

  const removeDrink = () => {
    axios.delete('/user', { data: { drinkData } })
      .then(() => getUserDrinks(currentUser))
      .catch((err) => console.error(err));
  };

  const searchProduct = (ingredient) => {
    window.open(`http://www.google.com/search?q=${ingredient}`);
  };

  const buildTableRow = (item, quantity, i) => {
    if (drink[item]) {
      return (
        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell align="center" component="th" scope="row" style={{ color: '#e6b363' }}>
            {drink[item]}
            <Description item={drink[item]} />
          </TableCell>
          <TableCell align="center" style={{ color: '#e6b363' }}>
            <img
              src={`http://www.thecocktaildb.com/images/ingredients/${drink[item]}-Small.png`}
              width="50px"
              height="50px"
              alt="ingredient"
              role="button"
              tabIndex={0}
              onClick={() => searchProduct(drink[item])}
              onKeyPress={() => searchProduct(drink[item])}
            />
          </TableCell>
          <TableCell align="center" style={{ color: '#e6b363' }}>{drink[quantity]}</TableCell>
        </TableRow>
      );
    }
    return null;
  };

  const checkVideo = () => {
    if (drink.strVideo) {
      return (
        <button className="youTube" type="button" onClick={() => window.open(drink.strVideo)}>
          <img src={youtube} alt="YouTube Link" />
        </button>
      );
    }
    return null;
  };

  const checkUserDrink = () => {
    for (let i = 0; i < userDrinks.length; i += 1) {
      if (userDrinks[i].idDrink === drink.idDrink) {
        return (
          <div className="favorite" role="button" tabIndex={0} onClick={removeDrink} onKeyPress={removeDrink}>
            {currentUser.length ? '???' : null}
            {checkVideo()}
          </div>
        );
      }
    }
    return (
      <div className="noFavorite" role="button" tabIndex={0} onClick={addDrink} onKeyPress={addDrink}>
        {currentUser.length ? '???' : null}
        {checkVideo()}
      </div>
    );
  };

  return (
    <div>
      <h3 id="currentDrinkText">{`Current Drink: ${drink.strDrink}`}</h3>
      <div className="imageIcons">{checkUserDrink()}</div>
      <img className="mainImage" src={drink.strDrinkThumb} alt="drink" />
      <div className="instructionBox">
        <h5 className="instructionHeader">Instructions:</h5>
        {` ${drink.strInstructions}`}
      </div>
      <TableContainer
        sx={{
          width: '60%',
          backgroundColor: '#281973EE',
          marginLeft: '20%',
          marginRight: '20%',
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: '#e6b363', width: '40%', fontWeight: '900' }}
                textalign="center"
                align="center"
              >
                Ingredients
              </TableCell>
              <TableCell
                sx={{ color: '#e6b363', width: '20%', fontWeight: '900' }}
                textalign="center"
                align="center"
              />
              <TableCell
                sx={{ color: '#e6b363', width: '40%', fontWeight: '900' }}
                textalign="center"
                align="center"
              >
                Measurements
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {render && maxIngredients.map((item, index) => buildTableRow(
              `strIngredient${index + 1}`,
              `strMeasure${index + 1}`,
              index,
            ))}
            {!render && maxIngredients.map((item, index) => buildTableRow(
              `strIngredient${index + 1}`,
              `strMeasure${index + 1}`,
              index,
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="tagsContainer">
        {drink.strTags ? `TAGS: ${drink.strTags.split(',').join(', ')}` : null}
      </div>
    </div>
  );
};

export default Overview;
