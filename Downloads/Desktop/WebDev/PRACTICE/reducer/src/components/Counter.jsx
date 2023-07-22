import React  from "react";
import useCounterHook from "../useCounterHook";
// import useCounter from "../useCounter";



export default function Counter() {

    // const {dispatch,state}=useCounter();
    // custom hook
    const {count,setCount,value}=useCounterHook(8);
  

  return (
    <>
      {/* <h1>Counter:{state.count}</h1>
      <button onClick={() => dispatch({ type: "PLUS" })}>Plus</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> */}
      <h1>Counter:{ count}</h1>
      <button onClick={() =>  setCount(prev=>prev+1)}>Plus</button>
      <button onClick={() => setCount(prev=>prev-1)  }>Minus</button>
      <button onClick={() => setCount(value) }>Reset</button>
    </>
  );
}
