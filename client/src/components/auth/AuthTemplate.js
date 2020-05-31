import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #e0dedf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .membership-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: -1px;
    /* transition: background 0.2s, color 0.2s; */
    .membership-text {
      margin-right: 0.3rem;
      font-size: 1.3rem;
      color: black;
      opacity: 0.7;
    }
  }
  box-shadow: rgb(146, 159, 168) 0px 0px 10px 5px;
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 4px;
`;

const SLink = styled(Link)`
  color: #288cf1;
  margin-left: 0.3rem;
  :hover {
    opacity: 0.8;
  }
`;

const AuthTemplate = ({ children, type }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="membership-area">
          {type === 'login' ? (
            <div>
              <span className="membership-text">Login</span>
              <span style={{ opacity: '0.3' }}> or</span>
              <SLink to="/register">sign up</SLink>
              <SLink to="/" style={{ verticalAlign: 'middle' }}>
                <GoHome />
              </SLink>
            </div>
          ) : (
            <div>
              <span className="membership-text">Sign Up</span>
              <span style={{ opacity: '0.3' }}> or</span>
              <SLink to="/login">login</SLink>
              <SLink to="/" style={{ verticalAlign: 'middle' }}>
                <GoHome />
              </SLink>
            </div>
          )}
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
