import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login'
import Button from '@material-ui/core/Button'
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom'
import Logout from './Logout'
const cookies = new Cookies();
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

 const  Navbar=(props)=> {
  const classes = useStyles();

  return (
      <div className={classes.root}>
         <AppBar position="static">
           <Toolbar>
              <Typography variant="h6" className={classes.title}>
                 Welcome To Application
               </Typography>
               {
                (cookies.get('loggedIn')!==null && cookies.get('loggedIn')!== undefined && cookies.get('loggedIn')!== "" ?
                <Button color="inherit"><Link  to="/logout">Logout</Link></Button>: null
                )
              }
          </Toolbar>
         </AppBar>
      </div>
    
  );
}
export default Navbar