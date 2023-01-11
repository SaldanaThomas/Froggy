import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Letter = ({ getRelated }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    getRelated(item);
  };

  return (
    <div>
      <Button
        style={{ color: 'teal' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Search By Letter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {letters?.map((letter) => (
          <MenuItem onClick={() => handleClose(letter)} key={letter}>
            {letter.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Letter;
