import React from 'react'
import AppBar from '@material-ui/core/AppBar'
//import {withStyles}  from  '@material-ui/core/'
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
//import { MemoryRouter as Router } from 'react-router';
//import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
//import Contact from './Contact'
//import Home from './Home'
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography'
//import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//import { createStyles} from'@material-ui/core/Styles'



//import Login  from './Login'
//import {BrowserRouter,Route,Switch} from 'react-router-dom'
/*const STYLES=theme=>({
   root:{
   	flexGrow: 1,
   },
   btn:{
    float:'right'
   },
   margin:{
    marginRight:'2%'
   },
   menuButton:{
    left:'66%'
   },
   menu:{
    position:'absolute',
    top:'77px',
    left:'218px'
   }

})

class  MobileAppbar extends Component {
  constructor(props){
    super(props)
    this.state={
      showmenu:false
    }
  }
  
handleClick=()=>{
    this.setState({showmenu:true})
 }
 
 handleClose=()=>{
  this.setState({showmenu:false})
 }

  render(){
     const {classes}=this.props;
     

        return(
          <div>
            
              <AppBar color="secondary" position="static" className={classes.root}>
                <Toolbar>

                        <Button color="inherit" href="http://localHost:3000" >Home</Button>
                        <IconButton edge='end' className={classes.menuButton}  color="inherit" aria-label="menu" onClick={()=>this.handleClick()}>
                              <MenuIcon />
                        </IconButton>
                        {this.state.showmenu ?(
                          <div className={classes.menu}>
                          <Menu id="AppBar-menu" 
                               anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                               transformOrigin={{ vertical: "top", horizontal: "center" }}                
                                keepMounted
                                open={true} onClose={()=>this.handleClose} className={classes.menu}>
                             <MenuItem onClick={()=>this.handleClose()}>Play</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>MultiMarkets</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>Cricket</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>Tennis</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>One CLick Bet</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>Live Streaming</MenuItem>
                             <MenuItem onClick={()=>this.handleClose()}>Setting</MenuItem>
                          </Menu></div>):(null)
                        }
                  </Toolbar>
              </AppBar>
             
             
            </div>
      )
  }
}
export default withStyles(STYLES)(MobileAppbar)*/
//import React from 'react';
//import Button from '@material-ui/core/Button';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles({
 root:{
    flexGrow: 1,
   },
   btn:{
    float:'right'
   },
   margin:{
    marginRight:'2%'
   },
   menuButton:{
    left:'66%'
   },
   menu:{
    position:'absolute',
    top:'77px',
    left:'218px'
   }
});

export default function MobileAppbar() {
  const classes= useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2,setAnchorEl2] =React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleClick2(event){
    setAnchorEl2(event.currentTarget);
  }
  function handleClose2(){
    setAnchorEl2(null)
  }

  return (
    <div>
    <AppBar color="secondary" position="static" >
                <Toolbar>

                        <Button color="inherit" href="http://localHost:3000" >Home</Button>
                        <IconButton edge="end" aria-controls="AppBar-menu" className={classes.menuButton} aria-haspopup="true" onClick={handleClick}>
                              <MenuIcon />
                        </IconButton>
      
                        <Menu
                           id="AppBar-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                             onClose={handleClose}
                         >
                               
                             <MenuItem onClick={handleClose}>Play</MenuItem>
                             <MenuItem onClick={handleClose}>MultiMarkets</MenuItem>
                             <MenuItem onClick={handleClick2} aria-controls="simple-menu"  aria-haspopup="true">Cricket</MenuItem>
                                    <Menu 
                                          id="simple-menu" anchorEl={anchorEl2} keepMounted open={Boolean(anchorEl2)} onClose={handleClose2}
                                      >
                                            <MenuItem onClick={handleClose2}>T-20</MenuItem>
                                            <MenuItem onClick={handleClose2}>World-cup</MenuItem>
                                            <MenuItem onClick={handleClose2}>Test</MenuItem>
                              </Menu>                                                                    
                             <MenuItem onClick={handleClose}>Tennis</MenuItem>
                             <MenuItem onClick={handleClose}>One CLick Bet</MenuItem>
                             <MenuItem href="http://localHost:3000/Login">Live Streaming</MenuItem>
                             <MenuItem onClick={handleClose}>Setting</MenuItem>
                          </Menu>
                           
                  </Toolbar>
              </AppBar>
    </div>
  );
}