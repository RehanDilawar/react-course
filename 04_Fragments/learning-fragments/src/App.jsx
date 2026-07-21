import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems=[]
  const [foodItems, setFoodItems] = useState([]);

  const OnKeyDown = (event) => {
    if (event.key==='Enter'){
      let newFood=event.target.value;
      event.target.value="";
      let newItems=[...foodItems,newFood];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the list of healthy foods that are good for your body and well
        being</p>
      </Container> */}
    </>
  );
}

export default App;
