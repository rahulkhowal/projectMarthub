import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SimpleSlider from './HomePage-Slider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
//import Divider from '@material-ui/core/Divider';
//import Tabs from '@material-ui/core/Tabs'
//import Tab from '@material-ui/core/Tab'
import {NavLink} from 'react-router-dom'
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography'


const UseStyles=theme=>({
 grid:{
   
   height:'-webkit-fill-available'
},
border:{
	border:'1px solid black'
},
root:{
	width: '100%',
  
},
root2:{
width:'145%'
},
background:{
  backgroundColor:'#D3D3D3'
},
btn:{
  marginTop:'4%',
  marginRight:'1%'
},
margin:{
  marginRight:'3%'
},
div:{
 flex:1,marginTop:'4%'
},

 div2:{
  display:'block'
 },
 listmargin:{
  marginLeft:'12%'
 },
 footer:{
justifyContent:'center',
marginTop:'6%',
marginBottom:'8%'
 }
})
class Panel extends Component{
 constructor(props){
   super(props)
   this.state={
    Cricket:[ {id:1,content:"India vs SouthAfrica", type:"one-day",Date:'26 Sept'},
              {id:2,content:"India vs Australia", type:"one-day",Date:'27 Sept'},
              {id:3,content:"India vs Shrilanka", type:"one-day",Date:'28 Sept'},
              {id:4,content:"India vs Pakistan", type:"one-day",Date:'29 Sept'},
              {id:5,content:"India vs Afganistan", type:"one-day",Date:'30 Sept'},
              {id:6,content:"India vs Zimbabbe", type:"one-day",Date:'31 Sept'},
              {id:7,content:"India vs England", type:"one-day",Date:'25 Sept'},
              {id:15,content:"India vs SouthAfrica", type:"one-day",Date:'17 Sept'},
              {id:16,content:"India vs Australia", type:"one-day",Date:'16 Sept'},
              {id:17,content:"India vs Shrilanka", type:"one-day",Date:'26 Sept'},
              {id:18,content:"India vs Pakistan", type:"one-day",Date:'15 Sept'},
              {id:19,content:"India vs Afganistan", type:"one-day",Date:'13 Sept'},
              {id:20,content:"India vs Zimbabbe", type:"one-day",Date:'12 Sept'},
              {id:21,content:"India vs England", type:"one-day",Date:'11 Sept'}

            ],
    Soccer:[  {id:8,content:"India vs SouthAfrica", type:"one-day",Date:'24 Sept'},
              {id:9,content:"India vs Australia", type:"one-day",Date:'23 Sept'},
              {id:10,content:"India vs Shrilanka", type:"one-day",Date:'22 Sept'},
              {id:11,content:"India vs Pakistan", type:"one-day",Date:'21 Sept'},
              {id:12,content:"India vs Afganistan", type:"one-day",Date:'20 Sept'},
              {id:13,content:"India vs Zimbabbe", type:"one-day",Date:'19 Sept'},
              {id:14,content:"India vs England", type:"one-day",Date:'18 Sept'}

           ],
    Tennis:[  {id:15,content:"India vs SouthAfrica", type:"one-day",Date:'17 Sept'},
              {id:16,content:"India vs Australia", type:"one-day",Date:'16 Sept'},
              {id:17,content:"India vs Shrilanka", type:"one-day",Date:'26 Sept'},
              {id:18,content:"India vs Pakistan", type:"one-day",Date:'15 Sept'},
              {id:19,content:"India vs Afganistan", type:"one-day",Date:'13 Sept'},
              {id:20,content:"India vs Zimbabbe", type:"one-day",Date:'12 Sept'},
              {id:21,content:"India vs England", type:"one-day",Date:'11 Sept'}


            ],
    arr :    [ {id:1,name:'Cricket'},{id:2,name:'Soccer'},{id:3,name:'Tennis'} ],
    cricketFlag: true,
    SoccerFlag:false,
    TennisFlag:false
   
     }
  }
  handleButtonClick() {
    console.log('hello')
    this.render();
  }
  handleCricketRender=()=>{
   this.setState({cricketFlag:true,SoccerFlag:false,TennisFlag:false}) 
  }
  handleSoccerRender=()=>{
    this.setState({cricketFlag:false,SoccerFlag:true,TennisFlag:false})
  }
  handleTennisRender=()=>{
    this.setState({cricketFlag:false,SoccerFlag:false,TennisFlag:true})
  }
    
 
render(){
   
const {classes}=this.props
return(
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
  	  <Grid container classes={{root: classes.grid}}>
  	    <Grid item xs={3} className={classes.border}>
  	          <List dense className={classes.root}>
  	            {this.state.arr.map(value=>{
  	            	return(
  	            		<ListItem key={value.id} button onClick={this.handleButtonClick.bind(this)}>
  	            		<ListItemText primary={value.name} />
  	            		 <ListItemSecondaryAction>{<ChevronRightIcon />}</ListItemSecondaryAction>
                    
  	            		</ListItem>
  	            		)
  	            })}
  	            </List>     
  	     
  	     </Grid>
  	     <Grid item xs={6} className={classes.border} classes={{item:classes.background}} >
  	       <SimpleSlider/><br></br>
        
             <AppBar color="secondary" position="static">
                 <Toolbar>
                      <MediaQuery query="(min-device-width: 1224px)">
                       <div className={classes.div}>
                          <NavLink
                              to="/"
                               exact className={classes.btn}
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleCricketRender()}  >Cricket</Button>
                          </NavLink>
                           <NavLink
                              to="/" className={classes.btn}
                               exact
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleSoccerRender()} >Soccer</Button>
                          </NavLink>
                           <NavLink
                              to="/" className={classes.btn}
                               exact
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleTennisRender()} >Tennis</Button>
                          </NavLink>
                       </div> 
                      </MediaQuery>  
   
                  </Toolbar>
              </AppBar>
            
              {(this.state.cricketFlag)?( <Paper>
                   <List dense className={classes.root}>
                      {this.state.Cricket.map(value=>{
                        return(
                            <ListItem key={value.id}  button>
                               <ListItemText primary={value.content}  />
                               <ListItemText secondary={value.type} />
                                <ListItemSecondaryAction >{value.Date} </ListItemSecondaryAction>
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
                {(this.state.SoccerFlag)?( <Paper>
                   <List dense className={classes.root}>
                      {this.state.Soccer.map(value=>{
                        return(
                            <ListItem key={value.id}  button>
                               <ListItemText primary={value.content} />
                               <ListItemText secondary={value.type} />
                              <MediaQuery query="(min-device-width: 1224px)"><ListItemSecondaryAction >{value.Date} </ListItemSecondaryAction>
                              </MediaQuery>
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
                {(this.state.TennisFlag)?( <Paper>
                   <List dense className={classes.root}>
                      {this.state.Tennis.map(value=>{
                        return(
                            <ListItem key={value.id} button>
                               <ListItemText primary={value.content}  />
                               <ListItemText secondary={value.type} />
                               <MediaQuery query="(min-device-width: 1224px)"><ListItemSecondaryAction >{value.Date} </ListItemSecondaryAction>
                               </MediaQuery>
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
               
  	     </Grid>
  	     <Grid item xs={3}  className={classes.border}>
  	      
  	         
  	      
  	     </Grid>
  	  </Grid>
    </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
         <Grid container   >
           <SimpleSlider/><br></br>
        
             <AppBar color="secondary" position="static">
                 <Toolbar>
                      
                       <div className={classes.div}>
                          <NavLink
                              to="/"
                               exact className={classes.btn}
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleCricketRender()}  >Cricket</Button>
                          </NavLink>
                           <NavLink
                              to="/" className={classes.btn}
                               exact
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleSoccerRender()} >Soccer</Button>
                          </NavLink>
                           <NavLink
                              to="/" className={classes.btn}
                               exact
                              activeClassName={"active"}
                          ><Button color="primary" variant="contained" onClick={()=>this.handleTennisRender()} >Tennis</Button>
                          </NavLink>
                       </div> 
                      
   
                  </Toolbar>
              </AppBar>
            
              {(this.state.cricketFlag)?( <Paper className={classes.root2}>
                   <List dense >
                      {this.state.Cricket.map(value=>{
                        return(
                            <ListItem key={value.id}  button>
                               <ListItemText primary={value.content}  />
                               <ListItemText secondary={value.type} />
                                <ListItemSecondaryAction classes= {{root:classes.listmargin}}>{value.Date} </ListItemSecondaryAction>
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
                {(this.state.SoccerFlag)?( <Paper className={classes.root2}>
                   <List dense >
                      {this.state.Soccer.map(value=>{
                        return(
                            <ListItem key={value.id}  button>
                               <ListItemText primary={value.content} />
                               <ListItemText secondary={value.type} />
                              <ListItemSecondaryAction classes= {{root:classes.listmargin}}>{value.Date}  </ListItemSecondaryAction>
                            
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
                {(this.state.TennisFlag)?( <Paper className={classes.root2}>
                   <List dense >
                      {this.state.Tennis.map(value=>{
                        return(
                            <ListItem key={value.id} button>
                               <ListItemText primary={value.content}  />
                               <ListItemText secondary={value.type} />
                               <ListItemSecondaryAction classes= {{root:classes.listmargin}}>{value.Date} </ListItemSecondaryAction>
                              
                            </ListItem>
                        )
                       })}   
                  </List>    
                </Paper>):(null)}
         </Grid>
        
         </MediaQuery>
         <Grid container className={classes.footer}>
         <div >
                       <Typography variant="body1">Whatsapp:  9654065267,8700362953</Typography>
                       <Typography variant="body1">Email: example@gmail.com</Typography>
                       <Typography variant="body1">Telegram: example@gmail.com</Typography>
                        <Typography variant="body1">Skype: example@gmail.com</Typography>


         </div>
         </Grid>
     </div>
  	)
  }
}
export default  withStyles(UseStyles) (Panel)