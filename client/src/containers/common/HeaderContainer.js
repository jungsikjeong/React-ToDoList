import React, { useState } from 'react';
import Header from '../../components/common/Header';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const [toggle, setToggle] = useState(false);

  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onToggle = () => {
    setToggle(!toggle);
  };
  return <Header user={user} onToggle={onToggle} toggle={toggle} />;
};

export default HeaderContainer;
