import React from 'react';
import Button from '@mui/material/Button';

const SaveTheFrogs = () => {
  return (
    <div>
      <Button
        style={{ color: 'aquamarine' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={() => window.open('https://savethefrogs.com/')}
      >
        Save The Frogs
      </Button>
    </div>
  );
};

export default SaveTheFrogs;
