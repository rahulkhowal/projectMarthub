import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/Textfield'
import {makeStyles} from '@material-ui/core/Styles'
import boy from   '../photos/boy.jpg'
import THEME from '../Resources/theme'
//import RemoveIcon from '@material-ui/icons';
import MediaQuery from 'react-responsive';




const STYLES=makeStyles(theme=>({
	root:{
      flexGrow:1,

	},
	paper:{
		width:'50%',
		
		marginLeft:'25%',
		marginTop:'-30%',
		position:'absolute'
	},
	mobile:{
		width:'84%',
		marginLeft:'10%',
		marginTop:'-163%',
		position:'absolute'
	},
	img:{
		height:'100%',
		width:'100%'
	},
	item:{
		backgroundColor:THEME.colors.Secondary
	},
	btn:{
		marginTop:'26%',
		marginLeft:'-50%'

	},
	form:{
		marginLeft:'21%'
	}

}))
const Login =()=>{

const classes=STYLES()
return(
   <div>
	<MediaQuery query="(max-device-width: 1224px)">
		<Paper className={classes.mobile}>
		    <Grid container>
		       <Grid item xs={6}>
                    <img src={boy}
			            width="25%"
					    height="60%"
					    alt="FirstSlide"
					    className={classes.img}
                    />
                </Grid>
                <Grid item xs={6} classes={{item:classes.item}}>
                  <form className={classes.form}>
                   <Textfield label="username" type="text"/>
                   <Textfield label="password" type="password"/>
                   <Textfield label="Validation" />
                   <Button variant="contained" color="primary" className={classes.btn}>Login</Button>
                  
                  </form>
                </Grid>
             </Grid>
          </Paper>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 1224px)">
		<Paper className={classes.paper}>
		    <Grid container>
		       <Grid item xs={6}>
                    <img src={boy}
			            width="25%"
					    height="60%"
					    alt="FirstSlide"
					    className={classes.img}
                    />
                </Grid>
                <Grid item xs={6} classes={{item:classes.item}}>
                  <form className={classes.form}>
                   <Textfield label="username" type="text"/>
                   <Textfield label="password" type="password"/>
                   <Textfield label="Validation" />
                   <Button variant="contained" color="primary" className={classes.btn}>Login</Button>
                  
                  </form>
                </Grid>
             </Grid>
          </Paper>
    </MediaQuery>
   </div> 
 )
}
export default Login