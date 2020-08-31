import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutData from './CheckoutData/CheckoutData';
import CheckoutSummary from './CheckoutSummary';
class Checkout extends Component{
    state = {
        ingredient:null,
        totalPrice:0 
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        let price=0;
        for(let param of query.entries()){
            if(param[0]==='price'){
                price=param[1];
            }else{
                ingredient[param[0]] = +param[1];

            }
        }
        this.setState({ingredient:ingredient,totalPrice:price});
    }
     checkoutCancelHandler = ()=>{
        this.props.history.goBack();
    }
    checkoutConctinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            <>
            <CheckoutSummary ingredient={this.state.ingredient} 
            checkoutCancel={this.checkoutCancelHandler}
            checkoutConctinue={this.checkoutConctinueHandler}/>
            <Route path={this.props.match.path +'/contact-data'}
            render = {(props)=>(<CheckoutData ingredient={this.state.ingredient} {...props} price={this.state.totalPrice}/>)} />
            </>
        )
    }

}
export default Checkout;