import css from "./FoodInput.module.css"
const FoodInput = ({handleOnChange}) => {

  return (
    <input type='text' placeholder="Enter Custom Food" className={css.foodInput}
    onChange={handleOnChange}
    ></input>
  )
}

export default FoodInput