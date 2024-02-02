
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

    const [clientSelection, setClientSelection] = useState("All")

    function handlingSelection (e) {
        e.preventDefault();
        const selection = e.target.value
        setClientSelection(selection)
    }

  const filteredItems =
  clientSelection === "All"
    ? items
    : items.filter((item) => item.category === clientSelection);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handlingSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
