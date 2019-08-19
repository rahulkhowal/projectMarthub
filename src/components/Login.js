import React,{Component} from 'react'
import axios from 'axios'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import '../App.css'
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom'
import {withStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Home from './Home'
import Signup from './Signup'
//import Dashboard from './Dashboard'
const cookies = new Cookies();
const STYLES= theme=>({
  root: {
    padding: theme.spacing(3, 1),
    width:'40%',
    position:'relative',
    left:'30%',
    top:'30%'

  },
  input:{
    position:'relative',
    //left: '5%'
  },
  btn:{
    margin:'2%' 
     }
})
class Login extends  Component{
  constructor(props){
     super(props)
     this.state={
      email:'',
    password:''
     }
  }
  handleClick=()=>{
    this.props.history.push('/Signup')
  }
  
  handleSubmit= async(e)=>{
     e.preventDefault()
     //console.log("Ihi")
     const Login={
       username:this.state.email || ' ',
       password: this.state.password || ''
      }
      
       //const  headers= {
         //'Access-Control-Allow-Origin':'http://localhost:3000'
     // }
   
    console.log("Login", Login);
       axios.post('http://localhost:3000/api/Users/login', {...Login}) 
    
     .then(res => {
        console.log(res);
        console.log(res.data); 
        axios.defaults.headers.common['Authorization'] =res.data.id;
        cookies.set('loggedIn', res.data.id, {path:'/'})
        this.props.history.push('/Home')
        console.log(cookies.cookies.loggedIn)
      })
      
      .catch(error =>  {
         console.log(error)
      })
     
  }

    
    render(){
      const{classes}=this.props
     return(
      <Paper className={classes.root}>
        <div className="Container">
          <form className="item-container" onSubmit={this.handleSubmit}>
            <TextField
             className={classes.input}
             id="standard-name"
              label="Email"
               type="text"
               name="email"
               autoComplete="email"
               margin="normal"
               value={this.state.email}
               onChange={(event)=>this.setState({email:event.target.value})}
             />
             
            <br/>
            <TextField
              className={classes.input}
              id="standard-password"   
              label="password"
              type="password"
              name="password"
              autoComplete="password"
               margin="normal"
               value={this.state.password}
               onChange={(event)=>this.setState({password:event.target.value})}
             /><br/>
            <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmit} className={classes.input}>
               Login
            </Button>
          </form>
          <Button variant="outlined" color="primary" onClick={this.handleClick} className={classes.btn}>
          Signup
          </Button>
           {
            (cookies.get('loggedIn')!==null && cookies.get('loggedIn')!== undefined && cookies.get('loggedIn')!== "" ?
               <Redirect to="/Home"/> : null
             )
    
          }
      </div>
     </Paper>
           
     )
    
    }
}
export default withStyles(STYLES)(Login)