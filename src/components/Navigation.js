import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navigation = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();

  function handleAboutClick() {
    navigate('/about');
  }
  function handleSignUpClick() {
    navigate('/signup');
  }
  function handleLogInClick() {
    navigate('/login');
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Typography variant="h3" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="nav-title">
              NEWSFORCE
            </Link>
          </Typography>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
          <Button color="inherit" onClick={handleAboutClick}>
            About Us
          </Button>
          <Button color="inherit" onClick={handleSignUpClick}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={handleLogInClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
