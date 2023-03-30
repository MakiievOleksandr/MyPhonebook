import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';

import { NavLink } from 'react-router-dom';

import LogoutButton from 'components/modules/UserMenu/LogoutButton/LogoutButton';

import { ContactsRounded, HomeRounded } from '@mui/icons-material';
import css from './menu.module.scss';

export default function BasicMenu({ hamburger }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={css.burger}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {hamburger}
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
        <NavLink className={css.link} to="/" onClick={handleClose}>
          <MenuItem dense={true} className={css.menuItem}>
            <p className={css.title}>Home</p>
            <HomeRounded />
          </MenuItem>
        </NavLink>
        <NavLink className={css.link} to="/contacts" onClick={handleClose}>
          <MenuItem dense={true} divider={true} className={css.menuItem}>
            <p className={css.title}>Contacts</p>
            <ContactsRounded
              sx={{
                fontSize: 20,
              }}
            />
          </MenuItem>
        </NavLink>
        <MenuItem className={css.menuItem} dense={true} onClick={handleClose}>
          Theme
        </MenuItem>
        <MenuItem className={css.menuItem} dense={true} onClick={handleClose}>
          Language
        </MenuItem>
        <MenuItem className={css.menuItem} dense={true} onClick={handleClose}>
          <LogoutButton>
            <p className={css.title}>Logout</p>
          </LogoutButton>
        </MenuItem>
      </Menu>
    </div>
  );
}
