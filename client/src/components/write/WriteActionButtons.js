import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

// 버튼 css 일단은 이렇게.
const WriteActionButtonsBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: calc(100vh - 30vh); /* 임시 */
  margin-right: 0.3rem;
`;

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <div>
      <WriteActionButtonsBlock>
        <StyledButton onClick={onPublish}>포스트 등록</StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteActionButtonsBlock>
    </div>
  );
};

export default WriteActionButtons;
