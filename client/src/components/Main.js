import React from 'react';
import styled, { keyframes } from 'styled-components';
import Clock from './common/Clock';

const fadeIn = keyframes` {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`;

const MainBlock = styled.div`
  position: absolute;
  z-index: -1;
  animation: fadeIn 0.5s linear;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

const Main = () => {
  return (
    <MainBlock>
      <Clock />
    </MainBlock>
  );
};

export default Main;
