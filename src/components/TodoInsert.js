import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";

const Input = styled.input`
  padding: 20px 10px;
  width: 100%;
  border: none;
  font-size: 14px;

  :focus {
    outline: none;
    width: 80%;
    transform: translateY(10px);
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }
`;

const TodoInsert = ({ onInsert, rest }) => {
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
      <Input
        value={value}
        onChange={onChange}
        placeholder="Add task"
        style={{ cursor: "pointer" }}
      />
    </form>
  );
};

export default TodoInsert;
