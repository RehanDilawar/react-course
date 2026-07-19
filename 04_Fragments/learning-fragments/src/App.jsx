import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Dry Nuts",
    "Eggs and Milk",
    "Tender Meat"
  ];
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item}className="list-group-item">{item}</li>
        ))}
      </ul>
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
