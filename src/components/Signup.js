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
//import Signup from './Signup'
import Login from './Login'
//import Dashboard from './Dashboard'
const cookies = new Cookies();
const STYLES= theme=>({
  form:{
   padding:'20%'
  },
  root: {
    padding: theme.spacing(3, 1),
    width:'40%',
    position:'relative',
    left:'30%',
    top:'30%'

  },
  btn1:{
    margin: '46px'
  },
  
  btn:{
    top: '-142px' 
     }
})
class Signup extends  Component{
  constructor(props){
     super(props)
     this.state={
      email:'',
      username:'',
    password:''
     }
  }
  handleClick=()=>{
    this.props.history.push('/Login')
  }
  
  handleSubmit= async(e)=>{
     e.preventDefault()
     //console.log("Ihi")
     const Signup={
       username:this.state.username || ' ',
       email:this.state.email || '',
       password: this.state.password || ''
      }
      
       //const  headers= {
         //'Access-Control-Allow-Origin':'http://localhost:3000'
     // }
   
    console.log("Login", Login);
       axios.post('http://localhost:3000/api/Users', {...Signup}) 
    
     .then(res => {
        console.log(res);
        console.log(res.data); 
        axios.defaults.headers.common['Authorization'] =res.data.id;
        cookies.set('loggedIn', res.data.id, {path:'/'})
        this.props.history.push('/Home')
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
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
             className={classes.input}
             id="standard-name"
              label="username"
               type="text"
               name="username"
               autoComplete="username"
               margin="normal"
               value={this.state.username}
               onChange={(event)=>this.setState({username:event.target.value})}
             />
             
            
            <TextField
              className={classes.input}
              id="standard-email"   
              label="email"
              type="text"
              name="email"
              autoComplete="email"
               margin="normal"
               value={this.state.email}
               onChange={(event)=>this.setState({email:event.target.value})}
             />
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
             />
             <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmit} className={classes.btn1}>
               Signup
             </Button>
          </form>
          <Button variant="outlined" color="primary" onClick={this.handleClick} className={classes.btn}>
          Login
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
export default withStyles(STYLES)(Signup)