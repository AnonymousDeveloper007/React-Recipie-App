import React from 'react';
import Logo from '../../Logo/Logo';


import classes from './siDeDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../HigherOrderComponents/Auxillary';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = ( props ) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
      <Aux>
          <Backdrop show={props.open} clicked={props.closed}/>
          <div className={attachedClasses.join(' ')}>
              <div className={classes.Logo}>
                  <Logo />
              </div>
              <nav>
                  <NavigationItems />
              </nav>
          </div>
      </Aux>
  );
};

export default sideDrawer;