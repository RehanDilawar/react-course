let CurrentTime = () =>{
  let time= new Date();
  return(
    <p className="lead">This is the current time :  {time.toLocaleTimeString()}<br></br>Today is {time.toLocaleDateString()}</p>
  
  )

}
export default CurrentTime;