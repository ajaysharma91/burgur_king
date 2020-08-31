import React from "react";
import "./Order.css";
const Order = (props) => {
  const ingredient = [];
  for (let ingredientName in props.ingredient) {
    ingredient.push({
      name: ingredientName,
      amount: props.ingredient[ingredientName],
    });
  }
  const ingredientOutput = ingredient.map((ing) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          padding:'2px',
          border: "2px solid #ccc",
        }}
        key={ing.name}
      >
        {ing.name} ({ing.amount})
      </span>
    );
  });
  return (
    <>
      <div className="Oredr">
        <p>Ingredients Salad {ingredientOutput}</p>
        <p>Price: {Number.parseFloat(props.price).toFixed(2)}</p>
      </div>
    </>
  );
};

export default Order;
