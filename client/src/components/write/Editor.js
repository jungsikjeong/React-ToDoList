import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import TagBox from './TagBox';

const EditorBlock = styled(Responsive)`
  width: 50vw;
  padding-top: 5rem;
  padding-bottom: 5rem;
  /* height: 100%; */
`;

const EditorWrapper = styled.div`
  border: 1px solid black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  min-height: 100vh;
`;

const Date = styled.div`
  text-align: left;
  padding: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const TitleInput = styled.input`
  width: 10vw;
  font-size: 1.5rem;
  outline: none;
  border: none;
  background: #2f3238;
  color: white;
  margin-bottom: 3rem;
  flex: 1 auto;
`;

const TodoInput = styled.input`
  /* flex: 1 auto; */
`;

const List = styled.div``;

const Item = styled.div``;

const Editor2 = () => {
  return (
    <EditorBlock>
      <EditorWrapper>
        <Date>DATE 19.04.04</Date>
        <TagBox />
        <Form>
          <TitleInput />
          <TodoInput />
          {/* 임시. 우선 태그와 글쓰기 리덕스 작업후 다시 만지기 */}
        </Form>
      </EditorWrapper>
    </EditorBlock>
  );
};

export default Editor2;
