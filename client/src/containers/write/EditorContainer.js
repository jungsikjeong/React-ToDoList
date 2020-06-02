import React, { useState, useRef, useCallback } from 'react';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
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

      nextId.current += 1;
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  return (
    <Editor
      todos={todos}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
};

export default EditorContainer;
