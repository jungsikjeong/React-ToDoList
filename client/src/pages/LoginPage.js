import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplate type="login">
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
