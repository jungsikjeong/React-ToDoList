import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px dashed #dee2e6;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 1px dashed #868e96;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  &:hover {
  }
`;

const textMap = {
  login: 'Login',
  register: 'Sign Up',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        {type === 'register' && (
          <StyledInput
            autoComplete="name"
            name="name"
            placeholder="User Name"
            onChange={onChange}
            value={form.name}
          />
        )}
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={form.email}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Password Check"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <Footer>
          {type === 'login' ? (
            <Button auth>Login</Button>
          ) : (
            <Button auth>Sign up</Button>
          )}
        </Footer>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
