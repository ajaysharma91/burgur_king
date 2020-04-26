import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';
const navigationItems = (props) =>{
    return (
    <ul className="NavigationItems">
        <NavigationItem exact link="/">BurgerBuilder</NavigationItem>
        <NavigationItem  link="/orders">Orders</NavigationItem>
    </ul>
)
}
export default navigationItems;