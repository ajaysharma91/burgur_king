import React, { Component } from "react";
// import Aux from "../Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import "./BurgerBuilder.css";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/spinner";
const INGREDIENT_PRICE = {
  cheese: 0.5,
  meat: 1.0,
  salad: 1.5,
  bacon: 2.0,
};
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      cheese: 0,
      meat: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice: 4,
    underFlow: "",
    puchasable: false,
    purchasing: false,
    loading:false
  };
  purchasingCancelHandle = () => {
    this.setState({ purchasing: false });
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  continueOrderhandler = () => {
      this.setState({loading:true});
    // const order = {
    //   ingredient: this.state.ingredient,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Vishal Adarsh",
    //     address: {
    //       street: "Sangam Street",
    //       city: "bikaner",
    //       country: "India",
    //     },
    //     email: "vadarsh@gmail.com",
    //   },
    //   deliverymethod: "fastest",
    // };
    // axios
    //   .post("/order.json", order)
    //   .then((response) => {
         
    //          const ingr={
    //           cheese:0,
    //           salad:0,
    //           meat:0,
    //           bacon:0
    //       }
    //       this.setState({loading:false,ingredient:ingr,totalPrice:4})
    //       }
    //     )
    //   .catch((error) => this.setState({loading:false}))
    const queryParams =[];
    for(let i in this.state.ingredient){
      queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredient[i]));
    } 
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname:'./checkout',
      search:'?'+queryString
    });
  };
  updatePurchaseStatus(ingredient) {
    const sum = Object.keys(ingredient)
      .map((iskey) => {
        return ingredient[iskey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ puchasable: sum > 0 });
  }
  addedIngredient = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredient,
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredient: updatedIngredient,
      underFlow: "",
    });
    this.updatePurchaseStatus(updatedIngredient);
  };
  lessIngredient = (type) => {
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount - 1;
    let updatedIngredient = {
      ...this.state.ingredient,
    };

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice;
    if (updatedCount < 0) {
      const updatedUnderflow =
        "This Ingredient Allready Empty Please Try Another ingredient";
      this.setState({
        totalPrice: newPrice,
        ingredient: updatedIngredient,
        underFlow: updatedUnderflow,
      });
    } else {
      updatedIngredient[type] = updatedCount;
      newPrice = oldPrice - priceAddition;
      this.setState({
        totalPrice: newPrice,
        ingredient: updatedIngredient,
        underFlow: "",
      });
      this.updatePurchaseStatus(updatedIngredient);
    }
  };
  render() {
    const disabled = {
      ...this.state.ingredient,
    };
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }
    let orderSummary = <OrderSummary
    ingredient={this.state.ingredient}
    cancelOrder={this.purchasingCancelHandle}
    continueOrder={this.continueOrderhandler}
    price={this.state.totalPrice}
  />
  if(this.state.loading){
    orderSummary = <Spinner/>;
  }
    return (
      <>
        <Model
          show={this.state.purchasing}
          purchaseClosed={this.purchasingCancelHandle}
        >
          {orderSummary}
        </Model>
        <Burger ingredient={this.state.ingredient}></Burger>
        <p className="Underflow">{this.state.underFlow}</p>
        <BuildControls
          ingredientAdded={this.addedIngredient}
          ingredientLess={this.lessIngredient}
          underFlow={this.state.underFlow}
          disabled={disabled}
          price={this.state.totalPrice}
          puchasable={this.state.puchasable}
          ordered={this.purchaseHandler}
        ></BuildControls>
      </>
    );
  }
}
export default BurgerBuilder;
