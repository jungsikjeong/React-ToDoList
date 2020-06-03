import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import TagBox from './TagBox';

const EditorBlock = styled(Responsive)`
  width: 50vw;
  padding-top: 5rem;
  padding-bottom: 5rem;
  height: 100%;
`;

const EditorWrapper = styled.div`
  border: 1px solid black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100vh;
`;

const Date = styled.div`
  text-align: left;
  padding: 0.5rem;
`;

const Form = styled.form``;

const Title = styled.input``;

const TodoInput = styled.input``;

const List = styled.div``;

const Item = styled.div``;

const Editor2 = () => {
  return (
    <EditorBlock>
      <EditorWrapper>
        <Date>DATE 19.04.04</Date>
        <TagBox />
      </EditorWrapper>
    </EditorBlock>
  );
};

export default Editor2;
