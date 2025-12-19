import React, { useState } from "react";
const Boolean = () => {
  const [counter, setCounter] = useState(false);
  const Toggle = () => {
    setCounter(!counter);
  };
  return (
    <div>
      <h1>Current State: {counter ? "True" : "False"}</h1>
      <button onClick={Toggle}>Click me!</button>
    </div>
  );
};

export default Boolean;
