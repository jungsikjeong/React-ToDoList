import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { RiEmotionNormalLine, RiEmotionHappyLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

import TodoInsert from "./TodoInsert";

const Container = styled.div`
  font-size: 2rem;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem;

  .title {
    margin-bottom: 1rem;
  }

  .submit {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    input {
      border: 0px;
    }
  }
`;

const Content = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0rem;
  border-bottom: 1px solid #ddd;

  .textContainer {
    display: flex;
    align-items: center;
    vertical-align: middle;
    text-align: center;
  }
`;

const Span = styled.span`
  ${(props) =>
    props.check &&
    css`
      text-decoration: line-through;
    `}
`;

const TodoList = ({ todos, onInsert, onRemove, onToggle }) => {
  useEffect(() => {
    console.log(todos);
  });

  return (
    <Container>
      <ContainerBox>
        <span className="title">Today</span>
        <div>
          {todos ? (
            todos.map((todo) => (
              <Content key={todo.id} onClick={() => onToggle(todo.id)}>
                {todo.checked ? (
                  <>
                    <div className="textContainer">
                      <RiEmotionHappyLine
                        style={{
                          verticalAlign: "middle",
                          marginRight: "0.5rem",
                        }}
                      />
                      <Span check>{todo.text}</Span>{" "}
                      <BsTrash
                        onClick={() => onRemove(todo.id)}
                        style={{ marginLeft: "auto", cursor: "pointer" }}
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
                      />
                      <Span>{todo.text}</Span>{" "}
                      <BsTrash
                        onClick={() => onRemove(todo.id)}
                        style={{ marginLeft: "auto", cursor: "pointer" }}
                      />
                    </div>
                  </>
                )}
              </Content>
            ))
          ) : (
            <div>todos 찾을수 없습니다.</div>
          )}
        </div>
        <TodoInsert onInsert={onInsert} />
      </ContainerBox>
    </Container>
  );
};

export default TodoList;
