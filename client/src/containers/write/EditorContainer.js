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

  // 로컬
  // const nextId = useRef(0);

  // const onLocalInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //     };
  //     setLocalTodos(localTodos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [localTodos],
  // );

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

///////

// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import Editor from '../../components/write/Editor';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeField, initialize } from '../../modules/write';

// const EditorContainer = () => {
//   // const [localTodos, setLocalTodos] = useState([]);

//   const dispatch = useDispatch();
//   const { title, body } = useSelector(({ write }) => ({
//     title: write.title,
//     body: write.body,
//   }));

//   const onChangeTitle = (e) => {
//     const { name, value } = e.target;
//     dispatch(changeField({ key: name, value }));
//   };

//   const onChangeBody = (newText) => {
//     dispatch(changeField({ key: body, value: newText }));
//   };

//   // 언마운트 될때 초기화
//   useEffect(() => {
//     return () => {
//       dispatch(initialize());
//     };
//   }, [dispatch]);

//   // 로컬 작업
//   // const nextId = useRef(0);

//   // const onLocalInsert = useCallback(
//   //   (text) => {
//   //     const todo = {
//   //       // id: nextId.current,
//   //       text,
//   //     };
//   //     setLocalTodos(localTodos.concat(todo));
//   //     // nextId.current += 1;
//   //   },
//   //   [localTodos],
//   // );

//   // 새롭게 다시
//   const onLocalToggle = useCallback(
//     (id) => {
//       setLocalTodos(
//         localTodos.map((todo) =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//         ),
//       );
//     },
//     [localTodos],
//   );

//   const onLocalRemove = useCallback(
//     (id) => {
//       setLocalTodos(localTodos.filter((todo) => todo.id !== id));
//     },
//     [localTodos],
//   );

//   return (
//     <Editor
//       // localTodos={localTodos}
//       // onLocalInsert={onLocalInsert}
//       onLocalToggle={onLocalToggle}
//       onLocalRemove={onLocalRemove}
//       onChangeTitle={onChangeTitle}
//       onChangeBody={onChangeBody}
//       title={title}
//       body={body}
//     />
//   );
// };

// export default EditorContainer;
