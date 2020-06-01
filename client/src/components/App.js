import React, { useRef, useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import TodoList from './TodoList';
import PostListPage from '../pages/PostListPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WritePage from '../pages/WritePage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

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
      localStorage.setItem('todo', JSON.stringify([...todos, todo]));
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
      localStorage.setItem(
        'todo',
        JSON.stringify(
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
        ),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));

      const todoList = JSON.parse(localStorage.getItem('todo')) || '';
      const todoChange = todoList.filter((todo) => todo.id !== id);

      localStorage.setItem('todo', JSON.stringify(todoChange));
    },
    [todos],
  );

  return (
    <>
      <Route component={PostListPage} path={['/@:name', '/']} exact />
      <Route component={ProfilePage} path="/profile" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:name/:postId" />

      {/* <TodoList
        todos={todos}
        onInsert={onInsert}
        onRemove={onRemove}
        onToggle={onToggle}
      /> */}
    </>
  );
};

export default App;
