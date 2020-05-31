import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  /* background: white; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    color: white;
    font-size: 1.125rem;
    font-weight: 800;
    font-family: 'Raleway', Arial, sans-serif;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const SLink = styled(Link)`
  :hover {
    opacity: 0.7;
  }
`;
const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">
            <SLink to="/">To-do list today</SLink>
          </div>
          <div className="right">
            <SLink to="/login">
              <FaUserCircle size="24" color="#3498db" />
            </SLink>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
