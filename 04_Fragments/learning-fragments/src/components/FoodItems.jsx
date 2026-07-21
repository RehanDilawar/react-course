import Item from "./Item";
const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} FoodItem={item} handlyBuyButtonClicked={()=>console.log(`${item } being baught.`)}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
