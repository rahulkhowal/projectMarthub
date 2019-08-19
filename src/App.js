import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Login from './components/Login'
//import Logout from './components/Logout'
//import Home from './components/Home'
//import Signup from './components/Signup'
import THEME from './HomePage/Resources/theme'
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'
//import Button from '@material-ui/core/Button';
import Tab from './HomePage/components/navbar'
import Navigation from './HomePage/components/Appbar'
import Panel from './HomePage/components/panel'
import Login from './HomePage/components/Login'
import MobileNavbar from './HomePage/components/MobileNavbar'
//import { useMediaQuery } from 'react-responsive'
//import App from './App'
import MediaQuery from 'react-responsive';
import MobileAppbar from './HomePage/components/MobileAppbar'


const theme=createMuiTheme({
  palette:{
    primary:{
      main:THEME.colors.primary,
      light:THEME.colors.Light
    },
    secondary:{
      main:THEME.colors.Secondary,
      Dark:THEME.colors.red
    }
  },
  
  

})

 const App =()=> {

  
    
return (
     <MuiThemeProvider theme={theme}>
       <BrowserRouter>
         <MediaQuery query="(min-device-width: 1224px)">
              <Tab/>
          </MediaQuery>
           <MediaQuery query="(max-device-width: 1224px)">
                  <MobileNavbar/>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 1224px)">
              <Navigation/>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
                  <MobileAppbar/>
            </MediaQuery>
          <Panel/>  
          <Switch>
            <Route exact path="/Login" component={Login} /> 
          </Switch>
      </BrowserRouter>      
    </MuiThemeProvider>

  );
  }
  


export default App;
