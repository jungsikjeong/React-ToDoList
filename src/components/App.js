import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const App = () => {
  const posts = useSelector((state) => state.todos);

  return <TodoList posts={posts} />;
};

export default App;
