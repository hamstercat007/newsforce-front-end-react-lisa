import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = ({ themeToggler }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NewsForce
          </Typography>
          <IconButton onClick={themeToggler}>
            <Brightness6Icon />
          </IconButton>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
