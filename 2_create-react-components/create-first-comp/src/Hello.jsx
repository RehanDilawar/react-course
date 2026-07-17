function Hello(){
  let number=512
  let myName="Rehan"
  let fullName = () => {
    return "Rehan Baloch";
  }
  return (
    <p>Hello, This is the FUTURE speaking, I am your master {fullName()} and this is Message: <b>{number}</b></p>
  )
}
export default Hello;