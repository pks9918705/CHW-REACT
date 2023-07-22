import React  from "react";
import useCounter from "../useCounter";



export default function Counter() {

    const {dispatch,state}=useCounter();
  

  return (
    <>
      <h1>Counter:{state.count}</h1>
      <button onClick={() => dispatch({ type: "PLUS" })}>Plus</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
