import React from 'react';
import './Burger.css';
import Burgeringredient from '../Burger/Burgeringredient/Burgeringredient';
const burger = (props)=>{
    let transformedingredient = Object.keys(props.ingredient)
    .map(igKey=> {
        return [...Array(props.ingredient[igKey])].map((_,i)=> {
            return <Burgeringredient key={igKey +i} type={igKey}></Burgeringredient>
        })        
    }).reduce((arr,el)=>{
        return arr.concat(el)
    }, []);
    console.log(transformedingredient);
    if(transformedingredient.length===0)
    transformedingredient = <p>Please Add Ingredient First!!</p>
    return(
        <div className="Burger">
            <Burgeringredient type="bread-top"/>
            {transformedingredient}
            <Burgeringredient type="bread-bottom"/>
        </div>
    );
}

export default burger;