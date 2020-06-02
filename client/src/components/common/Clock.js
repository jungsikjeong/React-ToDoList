import React from 'react';
import styled from 'styled-components';
import Date from 'react-live-clock';
import Responsive from './Responsive';

const ClockBlock = styled.div`
  position: relative;
  margin-right: 0 auto;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: white;
`;

const ClockWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  color: black;
`;

const CurDate = styled(Date)`
  font-size: 24px;
`;

const CurDay = styled(Date)`
  font-style: italic;
  font-size: 23px;
  margin-top: 0.4rem;
`;

const CurTime = styled(Date)`
  font-size: 40px;
  font-weight: 600;
  margin-top: 1rem;
`;

const Clock = () => {
  return (
    <ClockBlock>
      <ClockWrapper>
        <CurDate format={'YYYY / M / D'} ticking={true} />

        <CurDay format={'dddd'} />

        <CurTime format={'hh:mm A'} ticking={true} />
      </ClockWrapper>
    </ClockBlock>
  );
};

export default Clock;
