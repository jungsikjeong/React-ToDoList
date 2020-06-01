import React, { useState } from 'react';
import Header from '../../components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onLogout = () => {
    dispatch(logout());
  };

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Header
      user={user}
      onToggle={onToggle}
      toggle={toggle}
      onLogout={onLogout}
    />
  );
};

export default HeaderContainer;
