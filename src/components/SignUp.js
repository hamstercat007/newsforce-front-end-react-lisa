import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '300px',
        },
    '& .MuiButtonBase-root': {
          margin: theme.spacing(2),
        },
  },
}));

const SignUp = ({ handleClose }) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update this with API call to user db
    console.log(firstName, lastName, email, password, confirmPassword);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h3>Create an account</h3>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        required
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <div>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUp