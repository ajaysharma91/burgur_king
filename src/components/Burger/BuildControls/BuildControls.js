import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const buildControls = (props) =>{
    const control = [
        {label:'Salad',type:'salad'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Bacon',type:'bacon'}
    ];
    return(
        <div className="BuildControls">
            <p>Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                control.map(ctrl  =>(
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added ={() => props.ingredientAdded(ctrl.type)} 
                    deleted= {() => props.ingredientLess(ctrl.type)}
                    underFlowMessage={props.underFlow}
                    disabled = {props.disabled[ctrl.type]}
                    />
                ))
            }
        <button className="OrderButton"
         disabled={!props.puchasable}
         onClick={props.ordered}>Order Now
         </button>
        </div>
    );
}

export default buildControls;