import React from 'react'
//import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core'
//import {withStyles} from '@material-ui/core'
//import THEME from '../Resources/theme'
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper'
//import InputAdornment from '@material-ui/core/InputAdornment';
//import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
//import { spacing } from '@material-ui/system';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import THEME from '../Resources/theme'
//import Typography from '@material-ui/core/Typography'
//import {AccountCircle}from '@material-ui/icons/AccountCircle';
//import IconButton from '@material-ui/icons/IconButton'

const useStyles = makeStyles(theme => ({
  root:{
		flexGrow: 1,
		height:'85px'

		
	},
	logo:{
		marginRight: '2%',
	},
	text:{
       width:"5%"
	},
	icon:{
		marginRight:'1%',
    padding:'5px'
	},
	
  Paper: {
    width: '223px',
    
    },
 inputroot:{
    	BackgroundColor:THEME.colors.White
    },
 flex:{
    display:'inline',
    marginRight:'20%',
    padding:'5px'

    },
  positionIcon:{
    position:'relative',
    top:'6px',
    left:'84%'
  }

}));
const Tab=()=>{
     const classes = useStyles()
     return(
          
             <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar>
                  <Typography variant="h6" className={classes.logo}>Logo</Typography>
                  <Paper className={classes.Paper} className={classes.flex}>
                            <SearchIcon className={classes.positionIcon}/>
                            <InputBase
                              placeholder="Search…"
                              classes={{
                               root: classes.inputroot,
                                
                                 }}
                               />
                   </Paper>                  
                    <AccountCircle className={classes.icon} />
                    <Paper className={classes.icon}>
                       <InputBase
                         placeholder="username"
                         type="text"

                         />
                    </Paper>
                    <Paper className={classes.icon}>
                       <InputBase
                         placeholder="password"
                         type="password"

                         />                       
                    </Paper>
                    <Paper className={classes.icon}>
                       <InputBase
                         placeholder="validation"
                         type="text"
                         />
                    </Paper>
                    <Button color="secondary" variant="contained" className={classes.icon}>Login</Button>
                    <Button color="secondary" variant="contained">SignUp</Button>
                </Toolbar>
              </AppBar> 
           

     	)
	}
export default Tab