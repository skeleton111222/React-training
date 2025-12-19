import React, { useState } from "react";
const Input = () => {
  const [Input, setInput] = useState("hello");
  const type = (event) => {
    setInput(event.target.value);
    // let a = event.target.value;
    // console.log(a);
    console.log(event.target.value);
  };
  const reset = () => {
    setInput("");
  };
  return (
    <div>
      <h1>{Input}</h1>
      <input type="text" onChange={type}></input>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Input;
