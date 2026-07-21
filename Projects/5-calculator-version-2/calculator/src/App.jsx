import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] =useState("")
  return (
    <div className={css.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
