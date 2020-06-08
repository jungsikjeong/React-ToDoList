import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Responsive from '../common/Responsive';
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import Date from 'react-live-clock';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';
import { MdRemoveCircleOutline } from 'react-icons/md';

const floater = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(8%);
}
100% {
  transform: translateY(0%);
}
`;

const EditorBlock = styled(Responsive)`
  width: 50vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background: #fff9db;

  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 15px 2px;
`;

const EditorWrapper = styled.div`
  border: 1px solid black;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #fff9db;
  padding: 0;
  min-height: 90vh;
  font-size: 1.125rem;
  line-height: 1.5;
  box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    text-align: center;
    margin-left: 0.2rem;
  }
`;

const StyleDate = styled(Date)`
  text-align: left;
  padding: 0.5rem;
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  background: #fff9db;
  color: #495057;
  margin-bottom: 1.5rem;
  text-align: center;
  margin-top: 1rem;

  ::placeholder {
    text-align: center;
  }

  :hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.2s;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .todoInput {
    background: #fff9db;
    /* background: black; */
    text-align: left;
    width: 100%;
    color: #495057;
    font-size: 1.125rem;
    border: none;
    outline: none;

    padding: 10px 0px;

    :hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      transition: 0.2s;
    }
    :focus::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

const List = styled.div`
  :hover {
    animation: 1.5s infinite ${floater};
    cursor: pointer;
  }

  .checked {
    text-decoration: line-through;
    color: #adb5bd;
  }
  color: #495057;
  padding: 0 1rem;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .remove {
    color: #ff6b6b;
    :hover {
      color: #ff8787;
    }
  }
`;

const Editor = ({
  title,
  body,
  localTodos,
  onInsert,
  serverTodos,
  onLocalInsert,
  onLocalToggle,
  onRemove,
  onChangeTitle,
  onChangeBody,
  setServerTodos,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value) {
        onInsert(value);
      }
      setValue('');
    },
    [value, onInsert],
  );

  // 책829p 참고
  useEffect(() => {
    setServerTodos(body);
  }, [body]);

  return (
    <EditorBlock>
      <EditorWrapper>
        <TopWrapper>
          <span>Date</span>
          <StyleDate format={'YY. M. D'} ticking={true} />
          <WriteActionButtonsContainer />
        </TopWrapper>
        <TagBoxContainer />
        <TitleInput
          placeholder="Write Title"
          onChange={onChangeTitle}
          value={title}
          autoComplete="off"
        />
        <Form onSubmit={onSubmit}>
          <input
            className="todoInput"
            placeholder="Write Todo List"
            onChange={onChange}
            value={value}
            autoComplete="off"
          />
        </Form>
        {localTodos.map((todo) => (
          <List key={todo.id}>
            {todo.checked ? (
              <div className="checked">
                <ListBox>
                  <div onClick={() => onLocalToggle(todo.id)}>{todo.body}</div>
                  <div className="remove" onClick={() => onRemove(todo.id)}>
                    <MdRemoveCircleOutline />
                  </div>
                </ListBox>
              </div>
            ) : (
              <div>
                <ListBox>
                  <div onClick={() => onLocalToggle(todo.id)}>{todo.body}</div>
                  <div className="remove" onClick={() => onRemove(todo.id)}>
                    <MdRemoveCircleOutline />
                  </div>
                </ListBox>
              </div>
            )}
          </List>
        ))}
      </EditorWrapper>
    </EditorBlock>
  );
};

export default Editor;
