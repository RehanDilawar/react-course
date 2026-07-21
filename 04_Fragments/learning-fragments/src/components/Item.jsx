import css from "./Item.module.css"
const Item = ({FoodItem, handlyBuyButtonClicked}) => {

  return <li className={`${css['kg-item']} list-group-item kg-item`}><span className={css['kg-span']}>{FoodItem}</span>
  <button className={`${css.button} btn btn-success`}
  onClick={handlyBuyButtonClicked}
  >Buy</button>
  </li>;
};
export default Item;
