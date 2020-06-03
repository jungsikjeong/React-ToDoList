import React, { useState, useRef, useCallback, useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ key: name, value }));
  };

  // 언마운트 될때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

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
      onChange={onChange}
      title={title}
      body={body}
    />
  );
};

export default EditorContainer;
