import React, { useState } from "react";
import Item from "./Item";
import "../style.css"

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevValue => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Daftar Belanjay</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => (
            <Item text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
