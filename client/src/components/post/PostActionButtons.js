import React from 'react';
import styled from 'styled-components';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: -1.2rem;
  margin-right: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0;
  border-radius: 4px;
  background: #fff9db;
  color: #495057;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    /* background: #fff9db; */
    opacity: 0.6;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

const PostActionButtons = () => {
  return (
    <PostActionButtonsBlock>
      <ActionButton>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
