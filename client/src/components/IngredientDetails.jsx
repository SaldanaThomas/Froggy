import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import requests from '../utility/requests.js';
import Missing from '../assets/FrogWithSign.png';

const IngredientDetails = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [ingredient, setIngredient] = useState({});

  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    if (item) {
      requests.searchIngredientInfo(item, (data) => {
        data.strType = data.strType || <img src={Missing} alt="Detail Missing" />;
        data.strAlcohol = data.strAlcohol || <img src={Missing} alt="Detail Missing" />;
        data.strABV = data.strABV || <img src={Missing} alt="Detail Missing" />;
        setIngredient(data);
      });
    }
  }, []);

  return (
    <div>
      {Object.keys(ingredient).length && ingredient.strDescription ? (
        <div>
          <Button
            style={{ color: 'aquamarine', border: 'solid 1px aquamarine' }}
            variant="outlined"
            onClick={toggleOpen}
          >
            Description
          </Button>
          <Dialog
            open={open}
            onClose={toggleOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              style={{
                backgroundColor: '#8aaabd', borderBottom: 'solid 1px', paddingBottom: '0', textAlign: 'center',
              }}
            >
              {'Type: '}
              {ingredient.strType}
              {', Alcohol Content: '}
              {ingredient.strAlcohol}
              {', ABV: '}
              {ingredient.strABV}
            </DialogTitle>
            <DialogContent style={{ backgroundColor: '#8aaabd', paddingTop: '5px', paddingBottom: '2px' }}>
              <DialogContentText id="alert-dialog-description">
                {ingredient.strDescription}
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ backgroundColor: '#8aaabd', borderTop: '1px solid' }}>
              <Button style={{ color: 'aquamarine', border: '1px solid aquamarine' }} onClick={toggleOpen} autoFocus>
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
};

export default IngredientDetails;
