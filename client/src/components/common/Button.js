import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: #228be6;
  &:hover {
    background: #74c0fc;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
