import React, { useState, useEffect } from "react";

const Fcomp7 = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("The Effect executed");
  },[count]
);
  return (
    <div className={`mt-5 m-2 p-3 ${props.className}`}>
      <h1>Fcomp7</h1>
      <h3>Counter: {count}</h3>
      <button 
      onClick={() => setCount(count + 1)}
      className="me-3"
      >Increment</button>
      <button 
      onClick={() => setCount(count - 1)} 
      disabled={count === 0}
      >
        Decrement
      </button>
    </div>
  );
};

export default Fcomp7;

// To perfom side effects
// Run the code after the component renders
// Featching Data from an API
// Updagint the DOM
// Setting Timers
