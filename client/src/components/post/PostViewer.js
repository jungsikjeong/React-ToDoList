import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  width: 50vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background: #fff9db;

  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 15px 2px;
`;

const PostViewerWrapper = styled.div`
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

const PostHead = styled.div`
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  background: #fff9db;
  color: #495057;
  margin-bottom: 1.5rem;
  text-align: center;
  margin-top: 1rem;
`;

const SubInfo = styled.div`
  margin-left: auto;
`;

const PostContent = styled.div``;

const PostViewer = () => {
  return (
    <>
      <PostViewerBlock>
        <PostViewerWrapper>
          <PostHead>
            <span>Date </span>
            <span>{new Date().toLocaleDateString()}</span>
            <SubInfo>정중식</SubInfo>
          </PostHead>
          <Tags />
          <Title>제목</Title>

          <PostContent
            dangerouslySetInnerHTML={{
              __html: '<p>HTML <b>내용</b>입니다</p>',
            }}
          />
        </PostViewerWrapper>
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
