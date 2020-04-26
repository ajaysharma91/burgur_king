import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavigationItem.css';
const navigationItem = (props) =>{
    const Active = 'active';
    return (
        <li className="NavigationItem">
            <NavLink activeClassName="active" to={props.link} exact={props.exact}>{props.children}</NavLink></li>
    );
}
export default navigationItem;