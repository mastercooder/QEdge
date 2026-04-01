import React, { useState } from "react";

const Fcomp5 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="Fcomp5 m-3 p-3">
      <h2>Fcomp5</h2>
      <h4>Counter: {count}</h4>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="btn btn-primary btn-sm me-3"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
        disabled={count===0}
        className="btn btn-primary btn-sm me-3"
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => setCount(0)}
        className="btn btn-primary btn-sm me-3"
      >
        Reset
      </button>
    </div>
  );
};

export default Fcomp5;
