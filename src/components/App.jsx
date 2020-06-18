import React, { useState } from "react";

function App() {
  const [Item, updateItem] = useState("");
  const [Items, updateItems] = useState([]);
  function handleEvent(event) {
    updateItem(event.target.value);
  }
  function addItem() {
    updateItems(prevItem => {
      return [...prevItem, Item];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleEvent} type="text" value={Item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map(Item => {
            return <li>{Item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
