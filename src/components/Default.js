import React from "react";
import styled from "styled-components";
import { RiEmotionNormalLine } from "react-icons/ri";

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

    span {
      font-size: 1.2rem;
      color: #adb5bd;
    }
  }
`;

const Default = () => {
  return (
    <Content>
      <div className="textContainer">
        <RiEmotionNormalLine
          style={{
            verticalAlign: "middle",
            marginRight: "0.5rem",
            color: "#adb5bd",
          }}
        />
        <span>목록이 비어있습니다.</span>
      </div>
    </Content>
  );
};

export default Default;
