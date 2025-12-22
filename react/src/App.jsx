import React, { useState } from "react";
import "./App.css";
// import ItemList from "./itemfile";
// import Parent from "./parent";
// import Count from "./count";
// import Boolean from "./Boolean";
// import Inputs from "./input";

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
//   const [Inputs, setInput] = useState("hello");
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
//       <h1>{Inputs}</h1>
//       <input type="text" onChange={type}></input>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
// function App() {
//   const todolist = [
//     { id: 1, task: "go shopping" },
//     { id: 2, task: "play games" },
//   ];
//   return (
//     <div>
//       {/* <Inputs /> */}
//       {todolist.map((item) => (
//         <p key={item.id}>{item.task}</p>
//       ))}
//     </div>
//   );
// }

function App() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");
  const type = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const reset = () => {
    setInput("");
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodolist([...todolist, input]);
      setInput("");
    }
  };
  const deletes = () => {
    setTodolist((prev) => prev.slice(0, -1));
  };
  const resetall = () => {
    setTodolist([]);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <ol>
        {todolist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      {/* <Inputs
        input={input}
        type={type}
        reset={reset}
        resetall={resetall}
        addTodo={addTodo}
        deletes={deletes}
      /> */}
      <input type="text" value={input} onChange={type} />
      <button onClick={addTodo}>Add To-Do</button>
      <button onClick={reset}>Reset</button>
      <button onClick={resetall}>Delete all</button>
      <button onClick={deletes}>Delete last item</button>
    </div>
  );
}

// const Inputs = ({ input, type, reset, addTodo, resetall, deletes }) => {
//   return (
//     <div>
//       <input type="text" value={input} onChange={type} />
//       <button onClick={addTodo}>Add To-Do</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={resetall}>Delete all</button>
//       <button onClick={deletes}>Delete last item</button>
//     </div>
//   );
// };
export default App;
