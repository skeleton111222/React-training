import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0); // Initialize with prop `initialCount`

  // Function to handle decrement (decrease count by 1)
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  // Function to handle increment (increase count by 1)
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Count;
