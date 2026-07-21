import css from "./Item.module.css"
const Item = ({FoodItem,bought, handlyBuyButtonClicked}) => {

  return <li className={`${css['kg-item']} list-group-item ${bought && 'active'}`}><span className={css['kg-span']}>{FoodItem}</span>
  <button className={`${css.button} btn btn-success`}
  onClick={handlyBuyButtonClicked}
  >Buy</button>
  </li>;
};
export default Item;
