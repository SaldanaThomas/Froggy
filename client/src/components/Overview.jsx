import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AlertDialog from './AlertDialog.jsx';

const Overview = ({ drink }) => {
  const [render, setRender] = useState(false);
  const maxIngredients = new Array(15).fill(0);

  useEffect(() => {
    setRender(!render);
  }, [drink]);

  const buildTableRow = (item, quantity, i) => {
    if (drink[item]) {
      return (
        <TableRow
          key={i}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center" component="th" scope="row">
            {drink[item]}
            <AlertDialog item={drink[item]} />
          </TableCell>
          <TableCell align="center">{drink[quantity]}</TableCell>
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
            {render &&
              maxIngredients.map((item, index) =>
                buildTableRow(
                  `strIngredient${index + 1}`,
                  `strMeasure${index + 1}`,
                  index,
                ),
              )}
            {!render &&
              maxIngredients.map((item, index) =>
                buildTableRow(
                  `strIngredient${index + 1}`,
                  `strMeasure${index + 1}`,
                  index,
                ),
              )}
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
