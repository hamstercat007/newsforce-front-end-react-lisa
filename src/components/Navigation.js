import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import newsforceLogo from '../vectors/newsforceLogo.svg';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import TagCloud from './TagCloud';

const Navigation = ({ expanded, setExpanded, handleToggle }) => {
  const navigate = useNavigate();

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
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', justifyContent: 'center' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="nav-title">
            <img src={newsforceLogo} width="250" height="auto" alt="newsforce-logo" />
          </Link>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <FilterListIcon />
          </ExpandMore>
          <Button color="inherit" onClick={() => navigate('/about')}>
            About Us
          </Button>
        </Toolbar>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider light />
          <div className="flex-row">
            <TagCloud handleToggle={handleToggle} />
          </div>
        </Collapse>
      </AppBar>
    </Box>
  );
};

export default Navigation;
