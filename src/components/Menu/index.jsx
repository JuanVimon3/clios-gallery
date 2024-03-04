import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import styles from './styles.module.css';

const pages = [
  <NavLink to="/" className={({ isActive }) => classNames(styles.link, { [styles.activeLink]: isActive })}>
    Home
  </NavLink>,
  <NavLink to="/exhibitions/" className={({ isActive }) => classNames(styles.link, { [styles.activeLink]: isActive })}>
    Exhibitions
  </NavLink>,
  <NavLink to="/about/" className={({ isActive }) => classNames(styles.link, { [styles.activeLink]: isActive })}>
    About
  </NavLink>,
];

const MenuComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box className={styles.buttonBar}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
          </Box>
          <Box className={styles.iconButton}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              autoFocus={Boolean}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={styles.menuBar}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap className={styles.typography}>
            Clio&apos;s Gallery
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuComponent;
