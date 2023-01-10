import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Overview = ({ drink }) => {
  return (
    <div>
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt="drink" />
      <div>{drink.strInstructions}</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredients</TableCell>
              <TableCell align="left">Measurements</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drink.strIngredient1 && (
              <TableRow
                key={1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient1}
                </TableCell>
                <TableCell align="left">{drink.strMeasure1}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient2 && (
              <TableRow
                key={2}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient2}
                </TableCell>
                <TableCell align="left">{drink.strMeasure2}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient3 && (
              <TableRow
                key={3}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient3}
                </TableCell>
                <TableCell align="left">{drink.strMeasure3}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient4 && (
              <TableRow
                key={4}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient4}
                </TableCell>
                <TableCell align="left">{drink.strMeasure4}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient5 && (
              <TableRow
                key={5}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient5}
                </TableCell>
                <TableCell align="left">{drink.strMeasure5}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient6 && (
              <TableRow
                key={6}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient6}
                </TableCell>
                <TableCell align="left">{drink.strMeasure6}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient7 && (
              <TableRow
                key={7}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient7}
                </TableCell>
                <TableCell align="left">{drink.strMeasure7}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient8 && (
              <TableRow
                key={8}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient8}
                </TableCell>
                <TableCell align="left">{drink.strMeasure8}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient9 && (
              <TableRow
                key={9}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient9}
                </TableCell>
                <TableCell align="left">{drink.strMeasure9}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient10 && (
              <TableRow
                key={10}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient10}
                </TableCell>
                <TableCell align="left">{drink.strMeasure10}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient11 && (
              <TableRow
                key={11}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient11}
                </TableCell>
                <TableCell align="left">{drink.strMeasure11}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient12 && (
              <TableRow
                key={12}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient12}
                </TableCell>
                <TableCell align="left">{drink.strMeasure12}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient13 && (
              <TableRow
                key={13}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient13}
                </TableCell>
                <TableCell align="left">{drink.strMeasure13}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient14 && (
              <TableRow
                key={14}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient14}
                </TableCell>
                <TableCell align="left">{drink.strMeasure14}</TableCell>
              </TableRow>
            )}
            {drink.strIngredient15 && (
              <TableRow
                key={15}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drink.strIngredient15}
                </TableCell>
                <TableCell align="left">{drink.strMeasure15}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{drink.strTags ? `TAGS: ${drink.strTags}` : null}</div>
    </div>
  );
};

export default Overview;
