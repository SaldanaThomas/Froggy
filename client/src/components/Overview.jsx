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
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ color: '#e6b363' }}
          >
            {drink[item]}
            <AlertDialog item={drink[item]} />
          </TableCell>
          <TableCell align="center" style={{ color: '#e6b363' }}>
            {drink[quantity]}
          </TableCell>
        </TableRow>
      );
    }
    return null;
  };

  return (
    <div>
      <h3
        style={{
          textAlign: 'center',
          color: '#e6b363',
          fontSize: 'xx-large',
          marginBottom: '2px',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'black',
        }}
      >
        {`Current Drink: ${drink.strDrink}`}
      </h3>
      <img
        style={{ marginLeft: '25%', marginRight: '25%', width: '50%' }}
        src={drink.strDrinkThumb}
        alt="drink"
      />
      <div
        style={{
          textAlign: 'center',
          color: '#e6b363',
          backgroundColor: '#281973EE',
          marginLeft: '25%',
          marginRight: '25%',
          marginTop: '1%',
          marginBottom: '1%',
          paddingLeft: '3px',
          paddingRigjt: '3px',
        }}
      >
        <h5
          style={{
            marginBottom: '-1px',
            marginTop: '-5px',
            fontWeight: '900',
            fontSize: 'x-large',
          }}
        >
          Instructions:
        </h5>
        {` ${drink.strInstructions}`}
      </div>
      <TableContainer
        style={{
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
                style={{
                  color: '#e6b363',
                  width: '50%',
                  fontWeight: '900',
                }}
                textalign="center"
                align="center"
              >
                Ingredients
              </TableCell>
              <TableCell
                style={{
                  color: '#e6b363',
                  width: '50%',
                  fontWeight: '900',
                }}
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
      <div
        style={{
          textAlign: 'center',
          color: '#7c60bf',
          backgroundColor: '#e6b36388',
          marginLeft: '20%',
          marginRight: '20%',
        }}
      >
        {drink.strTags ? `TAGS: ${drink.strTags.split(',').join(', ')}` : null}
      </div>
    </div>
  );
};

export default Overview;
