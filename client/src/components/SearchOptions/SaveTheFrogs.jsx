import React from 'react';
import Button from '@mui/material/Button';

const SaveTheFrogs = () => {
  const handleClick = () => {
    event.preventDefault();
    window.open('https://panamawildlife.org/amphibians/');
  };

  return (
    <div>
      <Button
        style={{ color: 'aquamarine' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Save The Frogs
      </Button>
    </div>
  );
};

export default SaveTheFrogs;
