const FoodItems = () => {
    let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Dry Nuts",
    "Eggs and Milk",
    "Tender Meat"
  ];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
