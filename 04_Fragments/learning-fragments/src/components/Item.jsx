import css from "./Item.module.css"
const Item = ({FoodItem}) => {
  const handlyBuyButtonClicked=(event)=>{
    console.log(event)
    console.log(`${FoodItem} being bought.`)
  }
  return <li className={`${css['kg-item']} list-group-item kg-item`}><span className={css['kg-span']}>{FoodItem}</span>
  <button className={`${css.button} btn btn-success`}
  onClick={(event)=>handlyBuyButtonClicked(event)}
  >Buy</button>
  </li>;
};
export default Item;
