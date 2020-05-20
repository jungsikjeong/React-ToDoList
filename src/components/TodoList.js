import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { RiEmotionNormalLine, RiEmotionHappyLine } from "react-icons/ri";
import TodoInsert from "./TodoInsert";

const Container = styled.div`
  font-size: 2rem;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9rem;

  span {
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
`;

const Span = styled.span`
  ${(props) =>
    props.check &&
    css`
      text-decoration: line-through;
    `}
`;

const TodoList = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <Container>
      <ContainerBox>
        <span>Today</span>

        {posts.map((post) => (
          <Content key={post.id}>
            {post.checked ? (
              <>
                <RiEmotionHappyLine
                  style={{
                    verticalAlign: "middle",
                    marginRight: "0.5rem",
                  }}
                />
                <Span check>{post.body}</Span>
              </>
            ) : (
              <>
                <RiEmotionNormalLine
                  style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
                />
                <Span>{post.body}</Span>
              </>
            )}
          </Content>
        ))}
        <TodoInsert />
      </ContainerBox>
    </Container>
  );
};

export default TodoList;
