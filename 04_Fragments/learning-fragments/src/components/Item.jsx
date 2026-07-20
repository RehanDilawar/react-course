import css from "./Item.module.css"
const Item = ({FoodItem}) => {
  return <li className={`${css['kg-item']} list-group-item kg-item`}><span className={css['kg-span']}>{FoodItem}</span></li>;
};
export default Item;
