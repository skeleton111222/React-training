import React, { useState } from "react";
import "./App.css";
// import ItemList from "./itemfile";
// import Parent from "./parent";
// import Count from "./count";
// import Boolean from "./Boolean";
// import Input from "./input";

// const name = "Developer";

// const Stdnames = () => {
//   const items = ["Adarsh", "Papu", "Saugat"];
//   const [limit] = useState(3);
//   const croppedItems = items.slice(0, limit);

//   return (
//     <div>
//       <h3>Toppers</h3>
//       <ul>
//         {croppedItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
// const [counter, setCounter] = useState(false);
// const Toggle = () => {
//   setCounter(!counter);
// };
// // const [count, setCount] = useState(0); // Initial value is 0

// // Function to handle decrement
// const decrement = () => {
//   setCount((prevState) => prevState - 1); // Decrease the count by 1
//   setCount((prevState) => prevState - 1);
// };
// const increment = () => {
//   setCount(count + 1); // Decrease the count by 1
// };

// return (
//   <div>
{
  /* <h1>Hello, {name}</h1>
      {/* <ItemList />
      <Stdnames /> */
}
{
  /* <Parent /> */
}
{
  /* <button onClick={decrement}>Decrement</button>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button> */
}
{
  /* <Count />
      <h1>Current State: {counter ? "True" : "False"}</h1>
      <button onClick={Toggle}>Click me!</button> */
}

// function App() {
//   const [Input, setInput] = useState("hello");
//   const type = (event) => {
//     setInput(event.target.value);
//     // let a = event.target.value;
//     // console.log(a);
//     console.log(event.target.value);
//   };
//   const reset = () => {
//     setInput("");
//   };
//   return (
//     <div>
//       <h1>{Input}</h1>
//       <input type="text" onChange={type}></input>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
function App() {
  const todo = [
    { id: 1, task: "go shopping" },
    { id: 2, task: "play games" },
  ];
  return (
    <div>
      {/* <Input /> */}
      {todo.map((item) => (
        <p key={item.id}>{item.task}</p>
      ))}
    </div>
  );
}
export default App;
