
import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
const [appMode , setMode] = useState(false)
const appClass = appMode ? "App dark" : "App light"

function changeColorMode (e) {
   e.preventDefault();
   setMode(appMode => !appMode)
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColorMode}>{appMode ? "light" : "dark"} Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
