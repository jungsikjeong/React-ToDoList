import React from 'react';
import styled, { css } from 'styled-components';
import { RiEmotionNormalLine, RiEmotionHappyLine } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import TodoInsert from '../TodoInsert';
import Default from '../Default';
import Responsive from '../common/Responsive';
import TagBox from './TagBox';

const Container = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ContainerBox = styled.div`
  padding: 0;
  min-height: 320px;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;

  margin-bottom: 1.6rem;
  background: #2f3238;
  color: white;
  :focus {
    border-bottom: 1px solid #dee2e6;
  }
`;

const Content = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0rem;
  border-bottom: 1px solid #dee2e6;

  .textContainer {
    display: flex;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
  }

  :hover {
    transition: 0.2s;
    background: #3c414a;
    border-radius: 4px;
  }
`;

const Span = styled.span`
  color: #adb5bd;
  ${(props) =>
    props.check &&
    css`
      text-decoration: line-through;
      color: #adb5bd;
    `};
`;

const Editor = ({ todos, onInsert, onRemove, onToggle }) => {
  // GET localStorage
  //   const todoList = JSON.parse(localStorage.getItem('todo')) || '';

  return (
    <Container>
      <TitleInput placeholder="To Do Title" />
      <TagBox />
      <ContainerBox>
        {todos
          ? todos.map((todo) => (
              <Content key={todo.id}>
                {todo.checked ? (
                  <>
                    <div className="textContainer">
                      <RiEmotionHappyLine
                        style={{
                          verticalAlign: 'middle',
                          marginRight: '0.5rem',
                          color: '#fa5252',
                        }}
                        onClick={() => onToggle(todo.id)}
                      />
                      <Span check onClick={() => onToggle(todo.id)}>
                        {todo.text}
                      </Span>
                      <BsTrash
                        onClick={() => onRemove(todo.id)}
                        style={{ marginLeft: 'auto' }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="textContainer">
                      <RiEmotionNormalLine
                        style={{
                          verticalAlign: 'middle',
                          marginRight: '0.5rem',
                          color: 'adb5bd',
                        }}
                        onClick={() => onToggle(todo.id)}
                      />
                      <Span onClick={() => onToggle(todo.id)}>{todo.text}</Span>
                      <BsTrash
                        onClick={() => onRemove(todo.id)}
                        style={{ marginLeft: 'auto', color: '#adb5bd' }}
                      />
                    </div>
                  </>
                )}
              </Content>
            ))
          : ''}
        {todos.length === 0 && <Default />}

        <TodoInsert onInsert={onInsert} />
      </ContainerBox>
    </Container>
  );
};

export default Editor;
