import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Alcoholic = ({ alcoholic, getRelated }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    if (typeof item === 'string') {
      getRelated(item);
    }
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
        Alcohol Content
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
        {alcoholic?.map((content, index) => (
          <MenuItem
            onClick={() => handleClose(content.strAlcoholic)}
            key={`${index + content.strAlcoholic}`}
            style={{ backgroundColor: '#8aaabd' }}
          >
            {content.strAlcoholic}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Alcoholic;
