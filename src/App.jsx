import React, { useState } from "react";
import "./index.css";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!inputValue) return;
//     const newTodo = {
//       id: Date.now(),
//       text: inputValue,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setInputValue("");
//   };

//   const ClearItem = (id) => {
//     const newList = todos.filter((todo) => todo.id !== id);
//     setTodos(newList);
//   };

//   const ClearItems = () => {
//     setTodos([]);
//   };
//   return (
//     <div className="app">
//       <h1>Todo App</h1>
//       <form onClick={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a todo"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <input type="checkbox" />
//             <span>{todo.text}</span>
//             <button
//               onClick={() => {
//                 ClearItem(todo.id);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         type="button"
//         className="btn"
//         style={{ marginTop: "2rem", paddingTop: "1rem" }}
//         onClick={ClearItems}
//       >
//         Delete All
//       </button>
//     </div>
//   );
// }

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app">
      <h1>Esther's Todo</h1>
      <form action="">
        <input type="text" placeholder="Enter your todo" value={inputValue} />
        <button type="submit">Add </button>
      </form>
    </div>
  );
};
