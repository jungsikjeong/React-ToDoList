import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    .membership-text {
      margin-right: 0.3rem;
      font-size: 1.3rem;
      color: black;
      opacity: 0.7;
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 4px;
`;

const SLink = styled(Link)`
  color: #288cf1;
  margin-left: 0.3rem;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="membership-area">
          <span className="membership-text">Login</span>
          <span style={{ opacity: '0.3' }}> or</span>{' '}
          <SLink to="#">sing up</SLink>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
