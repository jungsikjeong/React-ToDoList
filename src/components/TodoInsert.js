import React from "react";
import { IoIosAdd } from "react-icons/io";

const TodoInsert = () => {
  return (
    <form className="submit">
      <IoIosAdd color="red" />
      <input placeholder="Add task" />
    </form>
  );
};

export default TodoInsert;
