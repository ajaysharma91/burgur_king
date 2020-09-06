import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
// import "./CheckoutData.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/spinner";
import Input from "../../../components/UI/Input";
class CheckoutData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Enter Your Name",
        },
        validation:{
          required:true
        },
        valid:false,
        value: "",
      },
      street: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Enter Street",
        },
        validation:{
          required:true
        },
        valid:false,
        value: "",
      },
      zipPortal: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Enter Zip Portal",
        },
        validation:{
          required:true
        },
        valid:false,
        value: "",
      },
      country: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Enter Country",
        },
        validation:{
          required:true
        },
        valid:false,
        value: "",
      },
      email: {
        elementType: "email",
        elementConfig: {
          type: "text",
          placeholder: "Enter Email",
        },
        validation:{
          required:true
        },
        valid:false,
        value: "",
      },
      deliverymethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        validation:{
          required:true
        },
        value: "",
        valid:true
      },
    },
    formValid:false,
    loading: false,
  };
  dataHandler = (e) => {
    e.preventDefault();
    this.setState({loading:true});
    const formorderData = {};
    for(let identifierkey in this.state.orderForm){
      formorderData[identifierkey] = this.state.orderForm[identifierkey].value;
    }
    const order = {
      ingredient: this.props.ingredient,
      price: this.props.price,
      formorderData
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        const ingr = {
          cheese: 0,
          salad: 0,
          meat: 0,
          bacon: 0,
        };
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  }
  checkValidation=(value,rules)=>{
    let isValid=true;
          if(rules.required){
            isValid = value.trim() !== '' && isValid;
          }
          return isValid;
  }
  inputHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidation(updatedFormElement.value,updatedFormElement.validation);
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formValid=true;
    for(let inputidentifier in updatedOrderForm){
      formValid = updatedOrderForm[inputidentifier].valid && formValid;
    }
    this.setState({orderForm:updatedOrderForm,formValid:formValid});
  }
  render() {
    const formElemet = [];
    for (let key in this.state.orderForm) {
      formElemet.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form className="form" onSubmit={this.dataHandler}>
        {formElemet.map((input) => {
          return (
            <Input
            key={input.id}
              elementType={input.config.elementType}
              elementConfig={input.config.elementConfig}
              value={input.config.value}
              valid={input.config.valid}
              changed={(event) => this.inputHandler(event, input.id)}
            />
          );
        })}
        <Button btnType="Success" disabled={!this.state.formValid}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h3>Enter Your Data</h3>
        {form}
      </div>
    );
  }
}

export default CheckoutData;
