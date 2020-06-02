import React, { useRef, useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import PostListPage from '../pages/PostListPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WritePage from '../pages/WritePage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:name', '/']} exact />
      <Route component={ProfilePage} path="/profile" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:name/:postId" />
    </>
  );
};

export default App;
