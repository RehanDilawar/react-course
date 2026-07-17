function Random(){
  let number=Math.random() *100
  return <h2 style={{'backgroundColor': 'teal','color':'white'}}>{Math.round(number)} is a random number</h2>
}
export default Random;