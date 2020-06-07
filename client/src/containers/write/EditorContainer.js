import React, { useState, useRef, useCallback, useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initialize,
  writePostListRemove,
} from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const [localTodos, setLocalTodos] = useState([]);
  const [serverTodos, setServerTodos] = useState([]);

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

  const onChangeTitle = (e) => {
    dispatch(changeField({ key: 'title', value: e.target.value }));
  };

  const onChangeBody = (newText) => {
    dispatch(changeField({ key: 'body', value: newText }));
  };

  const onInsert = useCallback(
    (text) => {
      if (serverTodos && serverTodos.includes(text)) return; // 이미 존재하면 추가X
      const newText = [...serverTodos, text];
      onLocalInsert(text);
      setServerTodos(newText);
      onChangeBody(newText);
      console.log('serverTodos:', serverTodos);
    },
    [serverTodos, onChangeBody],
  );

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
    },
    [localTodos],
  );

  const onLocalRemove = useCallback(
    (id) => {
      const newLocalText = localTodos.filter((todo) => todo.id !== id);
      setLocalTodos(newLocalText);
    },
    [localTodos],
  ); // 로컬에서만 적용되는데 리덕스에도 적용되게끔작업!

  return (
    <Editor
      localTodos={localTodos}
      serverTodos={serverTodos}
      onLocalInsert={onLocalInsert}
      onLocalToggle={onLocalToggle}
      onLocalRemove={onLocalRemove}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onInsert={onInsert}
      setServerTodos={setServerTodos}
      title={title}
      body={body}
    />
  );
};

export default EditorContainer;
