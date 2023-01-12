import React from 'react';
import Button from '@mui/material/Button';

const FeelingFroggy = () => {
  const handleClick = () => {
    event.preventDefault();
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
        Feeling Froggy
      </Button>
    </div>
  );
};

export default FeelingFroggy;
