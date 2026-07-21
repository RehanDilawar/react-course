import css from "./FoodInput.module.css"
const FoodInput = () => {
  const handleOnChange=(event)=>{
    console.log(event.target.value);
  }
  return (
    <input type='text' placeholder="Enter Custom Food" className={css.foodInput}
    onChange={handleOnChange}
    ></input>
  )
}

export default FoodInput