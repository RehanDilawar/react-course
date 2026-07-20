import css from "./App.module.css";

function App() {

  return (
    <div className={css.calculator}>
      <input className={css.display} type='text'></input>
      <div className={css.buttonsContainer}>
        <button className={css.buttons}>C</button>
        <button className={css.buttons}>1</button>
        <button className={css.buttons}>2</button>
        <button className={css.buttons}>3</button>
        <button className={css.buttons}>+</button>
      </div>
    </div>
  )
}

export default App;
