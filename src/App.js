import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {   makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton:{
    backgroundColor : "orange"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div >
      Assalam o Aleikum This is Class 9 PIAIC : Material UI  App Bar
      <AppBar position="static"className ={ classes.testButton}>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit" className ={classes.testButton}>Login</Button>
  </Toolbar>
</AppBar>
    </div>
  );
}

export default App;
