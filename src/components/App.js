import React, { useRef, useCallback, useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test one text",
      checked: false,
    },
    {
      id: 2,
      text: "test tne text",
      checked: false,
    },
    {
      id: 3,
      text: "test three text",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return <TodoList todos={todos} onInsert={onInsert} onRemove={onRemove} />;
};

export default App;
