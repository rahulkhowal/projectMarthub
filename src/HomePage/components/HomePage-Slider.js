import React, { Component } from "react";
import Slider from "react-slick";
import OneSlide from './Slider/One-Slide'
import THEME from '../Resources/theme'
import { withStyles } from "@material-ui/core";
import _ from 'lodash'

const NAV_BTN_STYLES = {
	arrow: {
		position: 'absolute',
		top: '45%',
		zIndex: 1,
		backgroundColor: THEME.colors.Secondary,
		height: 50,
		width: 50,
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer'
	},
	icon: {
        color:THEME.colors.White,
        fontSize:30
	},
	


}

const STYLES = theme => ({

next:{
    left: '71%',
   
    
},


prev:{
    left: '26%',
   
},
})

 class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      autoplay: true,
      nextArrow: <SampleNextArrow {...this.props} />,
	    prevArrow: <SamplePrevArrow {...this.props} />,


    };

    
function SampleNextArrow(props) {
	const {  style, onClick, classes } = props;
	return (
		<div
			style={{ ...style, ...NAV_BTN_STYLES.arrow }}
			onClick={onClick}
			className={classes.next}
		>
			<ion-icon name="arrow-forward" style={NAV_BTN_STYLES.icon} ></ion-icon>
		</div>
	);
}

function SamplePrevArrow(props) {
	const {  style, onClick, classes } = props;
	return (
		<div
			style={{ ...style , ...NAV_BTN_STYLES.arrow }}
			onClick={onClick}
			className={classes.prev}
		>
			<ion-icon name="arrow-back" style={NAV_BTN_STYLES.icon} ></ion-icon>
		</div>
	);
}



    const sliderInfo = [
        {
            url:'https://www.skyexchange.com/images/promo/kv-all-skybook365.jpg',
            fancy:'Relax And Enjoy',
            bold:'Thailand', 
            light:'Calling You!',
        },

        
    ];


    return (
      <div>
        <Slider {...settings}>
          {
           _.map(sliderInfo,cur => 
             <OneSlide url = {cur.url}  />
           )
          }

        </Slider>
      </div>
    );
  }
}

export default withStyles(STYLES)(SimpleSlider)