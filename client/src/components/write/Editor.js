import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Responsive from '../common/Responsive';
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import Date from 'react-live-clock';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';
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
  margin-top: 1rem;
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

    padding: 10px;

    ::placeholder {
      /* 이곳에 작성 */
    }
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

  color: black;
  padding: 1rem;

  span {
    ${(props) =>
      props.checked &&
      css`
        border-bottom: 1px solid black;
      `}
  }
`;

const Item = styled.div`
  span {
    :hover {
    }
  }
`;

const Editor = ({ title, body }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [localTodos, setLocalTodos] = useState([]);
  const [serverTodos, setServerTodos] = useState([]);

  const onChangeTitle = (e) => {
    dispatch(changeField({ key: 'title', value: e.target.value }));
  };

  const onChangeBody = (newText) => {
    dispatch(changeField({ key: 'body', value: newText }));
  };

  // 로컬
  const nextId = useRef(0);

  const onLocalInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        body: text,
        checked: false,
      };
      setLocalTodos(localTodos.concat(todo));
      nextId.current += 1;
    },
    [localTodos],
  );

  const onInsert = useCallback(
    (text) => {
      // if (!text) return; // 공백이라면 추가X
      if (serverTodos.includes(text)) return; // 이미 존재하면 추가X
      const newText = [...serverTodos, text];
      onLocalInsert(text);
      setServerTodos(newText);
      onChangeBody(newText);
    },
    [serverTodos, onChangeBody],
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [value, onInsert],
  );

  // 책829p 참고
  useEffect(() => {
    setServerTodos(body);
    console.log(localTodos);
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

        {localTodos.map((todo, index) => (
          <List key={index}>
            <span>{todo.body}</span>
          </List>
        ))}
      </EditorWrapper>
    </EditorBlock>
  );
};

export default Editor;
