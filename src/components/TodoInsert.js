import React, { useState, useCallback } from "react";
import { IoIosAdd } from "react-icons/io";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="submit" onSubmit={onSubmit}>
      <IoIosAdd color="red" />
      <input value={value} onChange={onChange} placeholder="Add task" />
    </form>
  );
};

export default TodoInsert;
