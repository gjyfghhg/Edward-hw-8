import List from "./components/List";
import { useState } from "react";

const { default: Form } = require("./components/Form");

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    const newTodo = {
      title: inputValue,
      isDone: false,
    };
    const nextTodos = [...todos];
    nextTodos.push(newTodo);
    setTodos(nextTodos);
    setInputValue("");
  };

  const handleDelete = (i) => {
    const nextTodos = [...todos];
    nextTodos.splice(i, 1);
    setTodos(nextTodos);
  };

  const handleDone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = true;
    setTodos(nextTodos);
  };

  const handleunDone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = false;
    setTodos(nextTodos);
  };

  return (
    <div className="App">
      <List
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleunDone={handleunDone}
      />
      <Form
        inputValue={inputValue}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
