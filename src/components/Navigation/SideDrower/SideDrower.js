import React from 'react';
import Logo from '../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrower.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrower =(props)=> {
    let attachedClass = 'Close';
    const SideDroawer = 'SideDrawer';
    if(props.open){
        attachedClass = 'Open';
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked}/>
        <div className={[SideDroawer,attachedClass].join(' ')}>
            <div className="LogoDrower"><Logo/></div>
            <NavigationItems/>           
        </div>  
        </Aux>
        
          );
}
export default sideDrower;