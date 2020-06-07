import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  /* height: calc(90vh - 30vh); */
`;

const StyledButton = styled(Button)`
  background: #fff9db;
  color: #495057;
  padding: 0px;
  :hover {
    background: #fff9db;
    opacity: 0.6;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>등록</StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
