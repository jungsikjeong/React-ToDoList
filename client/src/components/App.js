import React, { useRef, useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import PostListPage from '../pages/PostListPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WritePage from '../pages/WritePage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';
import MainPage from '../pages/MainPage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path={'/'} exact />
      <Route component={PostListPage} path={['/@:name', '/postList']} exact />
      <Route component={ProfilePage} path="/profile" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:name/:postId" />
    </>
  );
};

export default App;
