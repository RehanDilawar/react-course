const ErrorMessage = () =>{
    let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Dry Nuts",
    "Eggs and Milk",
    "Tender Meat"
  ];
  return (
    <>      
    {foodItems.length === 0 && <h3>I am still hungry</h3>}
    </>
  )
}
export default ErrorMessage;