import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'
import THEME from '../Resources/theme'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
//import Login from './Login'
//import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    marginRight:'0.5%'
  },
  inputroot:{
      BackgroundColor:THEME.colors.White,
      marginRight:'0.5%'
    },
    display:{
      display:'inherit'
    },
    positionIcon:{
      position:'relative',
      left:'87%',
      top: '5px'

    }
}));

export default function MobileNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar   color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>LOGO</Typography>
          <Paper  className={classes.display}>
                           <SearchIcon className={classes.positionIcon}/>
                            <InputBase
                              placeholder="Search…"
                              classes={{
                               root: classes.inputroot,
                                
                                 }}
          /></Paper>
          <Button color="secondary" variant="contained" href="http://localhost:3000/Login" >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
