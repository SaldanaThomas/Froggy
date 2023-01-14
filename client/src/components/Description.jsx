import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Missing from '../assets/FrogWithSign.png';

export default function Description({ item }) {
  const [open, setOpen] = useState(false);
  const [ingredient, setIngredient] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (item) {
      axios.get(`/searchByIngredientName?i=${item}`)
        .then(({ data }) => {
          setIngredient(data.ingredients[0]);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  useEffect(() => {
    ingredient.strType = ingredient.strType || <img src={Missing} alt="Detail Missing" />;
    ingredient.strAlcohol = ingredient.strAlcohol || <img src={Missing} alt="Detail Missing" />;
    ingredient.strABV = ingredient.strABV || <img src={Missing} alt="Detail Missing" />;
  }, [ingredient]);

  return (
    <div>
      {Object.keys(ingredient).length && ingredient.strDescription ? (
        <div>
          <Button
            style={{ color: 'aquamarine', border: 'solid 1px aquamarine' }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Description
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Type: '}
              {ingredient.strType}
              {', Content: '}
              {ingredient.strAlcohol}
              {', ABV: '}
              {ingredient.strABV}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {ingredient.strDescription}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
