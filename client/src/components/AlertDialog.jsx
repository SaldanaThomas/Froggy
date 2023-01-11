import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ item }) {
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
      axios
        .get(`/searchByIngredientName?i=${item}`)
        .then(({ data }) => {
          setIngredient(data.ingredients[0]);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div>
      {Object.keys(ingredient).length ? (
        <div>
          <Button
            style={{ color: 'teal', border: 'solid 1px teal' }}
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
              {`Type: ${ingredient.strType || 'N/A'}, Alcohol: ${
                ingredient.strAlcohol || 'N/A'
              }, ABV: ${ingredient.strABV || 'N/A'}`}
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
