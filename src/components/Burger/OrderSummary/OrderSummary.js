import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
   
    componentWillUpdate(){
        console.log("[Order Summary] component willupdate mount");
    }
    render(){
        const orderSummary = Object.keys(this.props.ingredient)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}:</span>{this.props.ingredient[igKey]}
            </li>
        )
    })
        return (
        <div>
            <h3>OrderSummary</h3>
            <p>Delicious burger With these ingredients!!</p>
            <ol>
                {orderSummary}
            </ol>
            <p>Price : <strong>{this.props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={this.props.cancelOrder}>Cancel</Button>
            <Button btnType="Success"clicked={this.props.continueOrder}>Continue Order !!</Button>
        </div>
        );
    }
    
}

export default OrderSummary;