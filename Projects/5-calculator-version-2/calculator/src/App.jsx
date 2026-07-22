import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick=(buttonText) => {
    if (buttonText==='C'){
      setCalVal("")
    }
      else if (buttonText==='='){
    const result=eval(calVal)
    setCalVal(result)
  }
  else{
    const newDisValue=calVal+buttonText
    setCalVal(newDisValue)
  }
}
  return (
    <div className={css.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
