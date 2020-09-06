import React from 'react';
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
const CheckoutSummary = (props)=>{
        return(
            <div className="CheckoutSummary"> 
                <h2>I hope it taste is  well!!</h2>
                <div style={{width:'100%', margin:'auto'}}>
                    <Burger ingredient ={props.ingredient}/>
                </div>
                <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutConctinue}>CONTINUE</Button>

            </div>
        )
}
export default CheckoutSummary;