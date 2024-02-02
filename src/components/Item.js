
import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  function handleClick(event) {
    setCart(!inCart);
    event.target.textContent = inCart ? "Add to Cart" : "Remove From Cart";
  }
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"onClick={handleClick}>Add to Cart</button>
     
    </li>
  );
}

export default Item;