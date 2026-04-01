import React from "react";
import useCounter from "./useCounter";

const Fcomp8 = (props) => {
  const { count, increment, decrement, reset } = useCounter(5);
  return (
    <div className={`mt-5 m-2 p-3 ${props.className}`}>
        <h1>Fcomp8</h1>
      <h3>Counter: {count}</h3>
      <button onClick={increment} className="me-3">Increment</button>
      <button onClick={decrement} disabled={count === 0} className="me-3">
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Fcomp8;
