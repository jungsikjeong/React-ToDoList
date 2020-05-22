import React from "react";
import styled, { css } from "styled-components";
import { RiEmotionNormalLine, RiEmotionHappyLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

import TodoInsert from "./TodoInsert";
import Default from "./Default";

const Container = styled.div`
  font-size: 2rem;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem;

  a {
    margin-bottom: 1rem;
  }

  .submit {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    ${(props) =>
      props.reset &&
      css`
        background: red;
      `}

    input {
      border: 0px;
    }
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
    background: #f8f9fa;
  }
`;

const Span = styled.span`
  ${(props) =>
    props.check &&
    css`
      text-decoration: line-through;
      color: #adb5bd;
    `}
`;

const TodoList = ({ todos, onInsert, onRemove, onToggle }) => {
  // const todoList = localStorage.getItem("todo");

  const todoList = JSON.parse(localStorage.getItem("todo")) || "";
  // console.log("todoList:", todoList.todos[0]);
  // console.log("todos:", todos);

  return (
    <Container>
      <ContainerBox>
        <a href="/">
          <span className="title">Today</span>
        </a>

        {todos && todoList.todos ? (
          todoList.todos.map((todo) => (
            <Content key={todo.id}>
              {todo.checked ? (
                <>
                  <div className="textContainer">
                    <RiEmotionHappyLine
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5rem",
                        color: "#fa5252",
                      }}
                      onClick={() => onToggle(todo.id)}
                    />
                    <Span check onClick={() => onToggle(todo.id)}>
                      {todo.text}
                    </Span>
                    <BsTrash
                      onClick={() => onRemove(todo.id)}
                      style={{ marginLeft: "auto" }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="textContainer">
                    <RiEmotionNormalLine
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5rem",
                      }}
                      onClick={() => onToggle(todo.id)}
                    />
                    <Span onClick={() => onToggle(todo.id)}>{todo.text}</Span>
                    <BsTrash
                      onClick={() => onRemove(todo.id)}
                      style={{ marginLeft: "auto" }}
                    />
                  </div>
                </>
              )}
            </Content>
          ))
        ) : (
          <Default />
        )}

        <TodoInsert onInsert={onInsert} />
      </ContainerBox>
    </Container>
  );
};

export default TodoList;
