import React, { useState } from "react";

function TodoList() {
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

  const resetAll = () => {
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
      <input type="text" value={input} onChange={type} />
      <button onClick={addTodo}>Add To-Do</button>
      <button onClick={reset}>Reset Input</button>
      <button onClick={resetAll}>Delete All</button>
      <button onClick={deletes}>Delete Last Item</button>
    </div>
  );
}

export default TodoList;
