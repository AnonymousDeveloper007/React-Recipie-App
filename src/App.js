import React from 'react';

import logo from './logo.svg';
import './App.css';
import './inDex.module.css';
import Layout from './HigherOrderComponents/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class  App extends React.Component {
 /*  state = {
    show:true
  };
  componentDidMount(){
    setTimeout(() =>{
      this.setState({show:false});
    },5000);
  } */
  render(){
    return (
      <div>
       <Layout>
         <Switch>
         <Route path="/orders" component={Orders}/>
         <Route path="/checkout" component={Checkout} />
         <Route path="/"  exact component={BurgerBuilder} ></Route>
         
        
        </Switch>
      </Layout> 
      </div>
    );
  }
 
}

export default App;
