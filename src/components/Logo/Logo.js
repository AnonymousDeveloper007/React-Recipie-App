import React from 'react';
import burgerLogo from '../../assets/Images/burgerlogo.png'
import classes from '../Logo/loGo.module.css'
const logo = (props) => (
  <div className={classes.Logo} style={{height:props.height}}>
    <img src={burgerLogo}></img>
  </div>
);

export default logo