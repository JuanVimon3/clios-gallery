import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './styles.module.css';

const Footer = () => (
  <Box className={styles.container}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div" className={styles.typography}>
          Copyright {new Date().getFullYear()} | All rights reserved
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Footer;
