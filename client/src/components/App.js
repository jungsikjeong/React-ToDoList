import React, { useRef, useCallback, useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      localStorage.setItem("todo", JSON.stringify([...todos, todo]));
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
      localStorage.setItem(
        "todo",
        JSON.stringify(
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));

      const todoList = JSON.parse(localStorage.getItem("todo")) || "";
      const todoChange = todoList.filter((todo) => todo.id !== id);

      localStorage.setItem("todo", JSON.stringify(todoChange));
    },
    [todos]
  );

  return (
    <TodoList
      todos={todos}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
};

export default App;