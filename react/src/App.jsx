import React, { useEffect, useState } from "react";
import "./App.css";
// import ItemList from "./itemfile";
// import Parent from "./parent";
import Count from "./count";
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

// function App() {
//   const [todolist, setTodolist] = useState([]);
//   const [input, setInput] = useState("");
//   const type = (event) => {
//     setInput(event.target.value);
//     console.log(event.target.value);
//   };

//   const reset = () => {
//     setInput("");
//   };

//   const addTodo = () => {
//     if (input.trim() !== "") {
//       setTodolist([...todolist, input]);
//       setInput("");
//     }
//   };
//   const deletes = () => {
//     setTodolist((prev) => prev.slice(0, -1));
//   };
//   const resetall = () => {
//     setTodolist([]);
//   };
//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <ol>
//         {todolist.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ol>
//       {/* <Inputs
//         input={input}
//         type={type}
//         reset={reset}
//         resetall={resetall}
//         addTodo={addTodo}
//         deletes={deletes}
//       /> */}
//       <input type="text" value={input} onChange={type} />
//       <button onClick={addTodo}>Add To-Do</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={resetall}>Delete all</button>
//       <button onClick={deletes}>Delete last item</button>
//     </div>
//   );
// }

// // const Inputs = ({ input, type, reset, addTodo, resetall, deletes }) => {
// //   return (
// //     <div>
// //       <input type="text" value={input} onChange={type} />
// //       <button onClick={addTodo}>Add To-Do</button>
// //       <button onClick={reset}>Reset</button>
// //       <button onClick={resetall}>Delete all</button>
// //       <button onClick={deletes}>Delete last item</button>
// //     </div>
// //   );
// // };
// export default App;

// function App() {
//   const [quotes, setQuotes] = useState([]);
//   const [character, setCharacter] = useState("");
//   const fetchData = async () => {
//     const response = await fetch(
//       `https://yurippe.vercel.app/api/quotes?character=${encodeURIComponent(
//         character
//       )}&random=3`
//     );
//     const data = await response.json();
//     setQuotes(data);
//     console.log(data);
//   };
//   const handleChange = (e) => {
//     setCharacter(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       fetchData(); // only fetch when Enter is pressed
//     }
//   };
//   // useEffect(() => {
//   //   fetchData();
//   // }, [character]);
//   // const handleChange = (e) => {
//   //   setCharacter(e.target.value);
//   // };
//   return (
//     <div>
//       <h1>Quotes</h1>
//       <input
//         type="text"
//         value={character}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         placeholder="Enter character name"
//       />
//       <ol>
//         {quotes.map((quote, index) => (
//           <li key={index}>{quote.quote}</li>
//         ))}
//       </ol>
//       <button onClick={fetchData}>Get Quote</button>

//       <Count />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [quotes, setQuotes] = useState([]);
//   const [character, setCharacter] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://yurippe.vercel.app/api/quotes?character=${encodeURIComponent(
//           character
//         )}&random=3`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch quotes");
//       }
//       const data = await response.json();
//       setQuotes(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setCharacter(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Quotes</h1>
//       <form onSubmit={fetchData}>
//         <input
//           type="text"
//           value={character}
//           onChange={handleChange}
//           placeholder="Enter character name"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Loading..." : "Get Quotes"}{" "}
//         </button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       <ol>
//         {quotes.map((quote, index) => (
//           <li key={index}>{quote.quote}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default App;
function App() {
  const [quotes, setQuotes] = useState([]);
  const [character, setCharacter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://yurippe.vercel.app/api/quotes?character=${encodeURIComponent(
          character
        )}&random=3`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }

      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err.message);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://yurippe.vercel.app/api/quotes?random=3`
        );

        if (!response.ok) {
          throw new Error("Failed to load initial data");
        }

        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
        setQuotes([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>

      {loading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        <div>
          <form onSubmit={fetchData}>
            <input
              type="text"
              value={character}
              onChange={handleChange}
              placeholder="Enter character name"
            />
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Get Quotes"}
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {quotes.length > 0 && (
            <ol>
              {quotes.map((quote, index) => (
                <li key={index}>{quote.quote}</li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
