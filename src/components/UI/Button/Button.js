import React from 'react'
import './Button.css';
const Button = 'Button';
const button = (props) => {
    console.log(props.disabled);
    const type= props.btnType;
    return(
    <button 
    disabled={props.disabled}
    className={[Button,type].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)
    }
export default button;