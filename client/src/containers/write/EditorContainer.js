import React, { useState, useRef, useCallback, useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const [localTodos, setLocalTodos] = useState([]);

  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  // 언마운트 될때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  // 로컬 작업
  const nextId = useRef(0);

  const onLocalInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        body: text,
        checked: false,
      };
      setLocalTodos(localTodos.concat(todo));
      nextId.current += 1;
    },
    [localTodos],
  );

  const onLocalToggle = useCallback(
    (id) => {
      setLocalTodos(
        localTodos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
      console.log(localTodos);
    },
    [localTodos],
  );

  const onLocalRemove = useCallback(
    (id) => {
      setLocalTodos(localTodos.filter((todo) => todo.id !== id));
    },
    [localTodos],
  ); // 로컬에서만 적용되는데 리덕스에도 적용되게끔작업!

  return (
    <Editor
      localTodos={localTodos}
      onLocalInsert={onLocalInsert}
      onLocalToggle={onLocalToggle}
      onLocalRemove={onLocalRemove}
      title={title}
      body={body}
    />
  );
};

export default EditorContainer;
