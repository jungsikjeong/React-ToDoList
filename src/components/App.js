import React, { useState } from "react";

import TodoList from "./TodoList";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      body: "test one text",
      checked: false,
    },
    {
      id: 2,
      body: "test tne text",
      checked: false,
    },
    {
      id: 3,
      body: "test three text",
      checked: true,
    },
  ]);

  return <TodoList posts={posts} />;
};

export default App;
