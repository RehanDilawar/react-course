import css from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={css.buttonsContainer}>
      {buttonsNames.map((bname) => (
        <button className={css.buttons} onClick={()=>onButtonClick(bname)}>{bname}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
