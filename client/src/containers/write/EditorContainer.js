import React, { useState, useRef, useCallback, useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
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

  // 새롭게 다시
  // const onLocalToggle = useCallback(
  //   (id) => {
  //     setLocalTodos(
  //       localTodos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [localTodos],
  // );

  // const onLocalRemove = useCallback(
  //   (id) => {
  //     setLocalTodos(localTodos.filter((todo) => todo.id !== id));
  //   },
  //   [localTodos],
  // );

  return <Editor title={title} body={body} />;
};

export default EditorContainer;
