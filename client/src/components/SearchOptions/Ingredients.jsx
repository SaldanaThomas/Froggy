import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Ingredients = ({ ingredients, getRelated }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
        style={{ color: 'aquamarine' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Ingredients
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
        {ingredients?.map((filter, index) => (
          <MenuItem
            onClick={() => handleClose(filter.strIngredient1)}
            key={`${index + filter.strIngredient1}`}
          >
            {filter.strIngredient1}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Ingredients;
