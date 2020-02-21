import React from 'react'
import './Button.css';
const Button = 'Button';
const button = (props) => {
    const type= props.btnType;
    return(
    <button className={[Button,type].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)
    }
export default button;