import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 20px 10px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  transition: 0.5s;
  background: #2f3238;
  padding: 0.5rem;
  color: white;
  font-size: 1rem;

  :focus {
    outline: none;
    width: 80%;
    transform: translateY(10px);
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    background: #3c414a;
  }

  &:hover {
    transition: 0.2s;
    background: #3c414a;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder="Add task" />
    </Form>
  );
};

export default TodoInsert;
