import React, { useState } from "react";
import "./index.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addInput = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    const newInput = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newInput]);
    setInputValue("");
    console.log(inputValue);
  };

  const clearItems = () => {
    setTodos([]);
  };

  const clearOne = (id) => {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };

  return (
    <div className="app">
      <h1>Esther's Todo</h1>
      <form onSubmit={addInput}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Add </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button
              type="submit"
              onClick={() => {
                clearOne(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        type="submit"
        style={{ marginLeft: "14rem", marginTop: "2rem" }}
        onClick={clearItems}
      >
        Delete All
      </button>
    </div>
  );
};
