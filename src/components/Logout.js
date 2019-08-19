import React ,{Component} from 'react'
import axios from 'axios'
import Login from './Login'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Logout extends Component{
	componentDidMount=()=>{
    //console.log('hi')
	 axios.post('http://testapi.halanx.com/rest-auth/logout/',{cookies})  
    .then(response => {
      axios.defaults.headers.common['Authorization'] = null;
      console.log(response)
      cookies.remove('loggedIn')
      this.props.history.push('/Login')
     })
     .catch(error =>  {
       console.log(error);
     })  
	}
	render(){
		return(
			<div></div>
			)
	}
} export default Logout
