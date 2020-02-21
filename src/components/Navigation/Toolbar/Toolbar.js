import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrowertoggle from '../SideDrower/SideDrowerToggle/SideDrowerToggle';
const toolbar = (props)=>(
    <header className="Toolbar">
        <SideDrowertoggle clicked={props.sideDrowerToggle}/>
        <div className="Logo"> 
            <Logo/>
        </div>
       
        <nav className="nav ">
            <NavigationItems/>
        </nav>
    </header>
);
export default toolbar;