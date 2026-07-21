import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  // let foodItems=[]
  let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Dry Nuts",
    "Eggs and Milk",
    "Tender Meat",
    "Oats",
  ];
    const handleOnChange=(event)=>{
    console.log(event.target.value);
  }
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
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
