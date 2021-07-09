import React from 'react';
import classes from './buRger.module.css'
import Burgeringredient from './BurgerIngredients/BurgerIngredient';
 
const burger = (props) => {
  let transformIngedients = Object.keys(props.ingredients)
  .map(igKey =>{
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
      return <Burgeringredient key={igKey+i} type={igKey}/>
    });
  }).reduce((arr,el) =>{
    return arr.concat(el);
  },[]);
  if(transformIngedients.length === 0)
  {
    transformIngedients =<p>Please Start Adding Ingredients</p>
  }
  console.log(transformIngedients);
  return(
    <div className={classes.Burger} >
      <Burgeringredient type = "bread-top"/>  
       {transformIngedients}
      <Burgeringredient type = "bread-bottom"/>  

    </div>
  );
};
export default burger;
