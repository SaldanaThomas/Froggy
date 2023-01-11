import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AlertDialog from './AlertDialog.jsx';

const Overview = ({ drink }) => {
  const [description, setDescription] = useState(new Array(15).fill(0));

  useEffect(() => {
    setDescription(new Array(15).fill(0));
    if (drink.idDrink) {
      for (let i = 1; i < 15; i += 1) {
        const item = `strIngredient${i}`;
        if (drink[item]) {
          axios
            .get(`/searchByIngredientName?i=${drink[item]}`)
            .then(({ data }) => {
              const temp = description;
              temp[i - 1] = data.ingredients[0];
              setDescription(temp);
            })
            .catch((err) => console.error(err));
        }
      }
    }
  }, [drink]);

  const buildTableRow = (item, quantity, i) => {
    if (item) {
      return (
        <TableRow
          key={i + 1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center" component="th" scope="row">
            {item}
            {description[i] ? <AlertDialog info={description[i]} /> : null}
          </TableCell>
          <TableCell align="center">{quantity}</TableCell>
        </TableRow>
      );
    }
    return null;
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{drink.strDrink}</h3>
      <img
        style={{ marginLeft: '25%', marginRight: '25%', width: '50%' }}
        src={drink.strDrinkThumb}
        alt="drink"
      />
      <div
        style={{ textAlign: 'center', marginLeft: '25%', marginRight: '25%' }}
      >
        {`Instructions: ${drink.strInstructions}`}
      </div>
      <TableContainer
        style={{
          width: '60%',
          backgroundColor: 'rgba(200,200,200,0.6)',
          marginLeft: '20%',
          marginRight: '20%',
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ color: 'teal', width: '50%' }}
                textalign="center"
                align="center"
              >
                Ingredients
              </TableCell>
              <TableCell
                style={{ color: 'teal', width: '50%' }}
                textalign="center"
                align="center"
              >
                Measurements
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buildTableRow(drink.strIngredient1, drink.strMeasure1, 0)}
            {buildTableRow(drink.strIngredient2, drink.strMeasure2, 1)}
            {buildTableRow(drink.strIngredient3, drink.strMeasure3, 2)}
            {buildTableRow(drink.strIngredient4, drink.strMeasure4, 3)}
            {buildTableRow(drink.strIngredient5, drink.strMeasure5, 4)}
            {buildTableRow(drink.strIngredient6, drink.strMeasure6, 5)}
            {buildTableRow(drink.strIngredient7, drink.strMeasure7, 6)}
            {buildTableRow(drink.strIngredient8, drink.strMeasure8, 7)}
            {buildTableRow(drink.strIngredient9, drink.strMeasure9, 8)}
            {buildTableRow(drink.strIngredient10, drink.strMeasure10, 9)}
            {buildTableRow(drink.strIngredient11, drink.strMeasure11, 10)}
            {buildTableRow(drink.strIngredient12, drink.strMeasure12, 11)}
            {buildTableRow(drink.strIngredient13, drink.strMeasure13, 12)}
            {buildTableRow(drink.strIngredient14, drink.strMeasure14, 13)}
            {buildTableRow(drink.strIngredient15, drink.strMeasure15, 14)}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'center' }}>
        {drink.strTags ? `TAGS: ${drink.strTags.split(',').join(', ')}` : null}
      </div>
    </div>
  );
};

export default Overview;
