import React, { Component } from "react";
//import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core";
//import Button from '@material-ui/core/Button';



const STYLES = theme => ({
    img:{
        backgroundColor:'black',
        opacity:'0.8'
    },

    textfancy:{
        position:'absolute',
        top:'40%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
    },

    Headline:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        display:'flex',
        width:1000,
        justifyContent: 'center',
        

    },
    


})


class OneSlide extends Component{

    render(){
        const {classes} = this.props

        return(
        <div> 
            <img src={this.props.url} 
            width ="100%"
            height ="100%"
            alt="FirstSlide"
            className={classes.img}
         />       
        
        </div>
        )
    }

}

export default withStyles(STYLES)(OneSlide)