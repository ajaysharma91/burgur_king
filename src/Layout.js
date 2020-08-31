import React, { Component } from 'react';
import Aux from '../Aux';
import BurgerBuilder from '../../container/burgerBuild/BurgerBuilder';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrower from '../../components/Navigation/SideDrower/SideDrower';
import Checkout from '../../container/burgerBuild/Checkout/Checkcout';
import {Route, Switch} from 'react-router-dom';
import Orders from '../../container/Orders/Orders';
class Layout extends Component{
    state = {
        sideDrowerHandler:false
    }

    sideDrowerhandlerFunction =()=>{
        this.setState({sideDrowerHandler:false})
    }
    sideDrowerToggleHandler = ()=>{
        console.log("calling");
        this.setState({sideDrowerHandler:true})
    }
    render(){
        return(
            <Aux>
            <Toolbar sideDrowerToggle={this.sideDrowerToggleHandler}></Toolbar>
            <SideDrower open={this.state.sideDrowerHandler} clicked={this.sideDrowerhandlerFunction}/>
            <main>
                <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/checkout" component={Checkout} /> 
                </Switch>
            </main>
        </Aux>
        )
    }
}
  
export default Layout;