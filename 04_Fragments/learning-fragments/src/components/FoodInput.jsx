import css from "./FoodInput.module.css"
const FoodInput = ({handleOnKeyDown}) => {

  return (
    <input type='text' placeholder="Enter Custom Food" className={css.foodInput}
    onKeyDown={handleOnKeyDown}
    ></input>
  )
}

export default FoodInput