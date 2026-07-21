import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  const [activeItems,setActiveItems]=useState([])
  const onBuyButton=(item, event)=>{
    const newItems=[...activeItems,item]
    setActiveItems(newItems)
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          FoodItem={item}
          bought={activeItems.includes(item)}
          handlyBuyButtonClicked={(event)=>onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
