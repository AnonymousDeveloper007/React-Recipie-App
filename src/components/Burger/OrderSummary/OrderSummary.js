import React,{Component} from 'react';
import Aux from '../../../HigherOrderComponents/Auxillary';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    componentWilUpdate()
    {
      console.log('[OrderSummary] WillUpdate');
    }
    render()
    {
      const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igkey =>{
    return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}:{this.props.ingredients[igkey]}</span></li>
    })
      return(
        <Aux>
          <h3>Your Order</h3>
          <p>A Delicious Burger with following ingredients:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
          <p>Continue To Checkout?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
          <Button btnType="Success" clicked={this.props.purchsedContinued}>CONTINUE</Button>
        </Aux>
     
      );

}
}
export default OrderSummary;