import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import './NavigationItems.css';
const navigationItems = (props) =>{
    return (
    <ul className="NavigationItems">
        <NavigationItem link="/" active="true">BurgerBuilder</NavigationItem>
        <NavigationItem link="/">More</NavigationItem>
    </ul>
)
}
export default navigationItems;