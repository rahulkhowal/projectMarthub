import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import {withStyles}  from  '@material-ui/core/'
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';
//import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
//import { MemoryRouter as Router } from 'react-router';
//import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
//import Grid from '@material-ui/core/Grid'
import Login  from './Login'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
const STYLES=theme=>({
   root:{
   	flexGrow: 1,
   },
   Button:{
    marginRight:'25%'
   },
   margin:{
    marginRight:'2%'
   }

})

class  Navigation extends Component {
  render(){
     const {classes}=this.props;
     


        return(
          <div>
            
              <AppBar color="secondary" position="static" className={classes.root}>
                <Toolbar>

                        <Button color="inherit" href="http://localHost:3000" >Home</Button>
                        <Button color="inherit">Play</Button>
                        <Button color="inherit">MultiMarkets</Button>
                        <Button color="inherit" href="http://localHost:3000">Cricket</Button>
                        <Button color="inherit" href="http://localHost:3000">Soccer</Button>
                        <Button color="inherit" className={classes.Button} href="http://localHost:3000">Tennis</Button>
                        <Typography variant="subtitle1">Time:</Typography>
                        <Typography variant="subtitle1"className={classes.margin}>GMT+5:30</Typography>
                        <Button color="primary" variant="contained" className={classes.margin}>One Click Bet</Button>
                        <Button color="inherit"className={classes.margin} href="http://localHost:3000/Login">Live Streaming</Button>
                        <Button color="inherit" href="http://localHost:3000/Login">Setting</Button>

                </Toolbar>
              </AppBar>
             
             <BrowserRouter>
                      <Switch>
                         
                         <Route exact path='/Login' component={Login}/>
                      </Switch>
              </BrowserRouter>
            </div>
      )
  }
}
export default withStyles(STYLES)(Navigation)