import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let foodItems=[]
  let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Dry Nuts",
    "Eggs and Milk",
    "Tender Meat"
  ];
  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
