import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  // let foodItems=[]
  // let foodItems = [
  //   "Lentils",
  //   "Green Vegetables",
  //   "Fruits",
  //   "Dry Nuts",
  //   "Eggs and Milk",
  //   "Tender Meat"
  // ];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
