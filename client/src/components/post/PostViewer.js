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
  padding: 0 1rem;
  color: #495057;
  font-size: 1rem;

  span + span:before {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
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
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem 1rem;
  color: #495057;
`;

const PostViewer = ({ post, loading, error, actionButtons }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을때
  if (loading || !post) {
    return null;
    // 나중에 작업
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <>
      <PostViewerBlock>
        <PostViewerWrapper>
          <PostHead>
            <span>Date</span>
            <span> {new Date(publishedDate).toLocaleDateString()}</span>
            <SubInfo>{user.name}</SubInfo>
          </PostHead>
          {actionButtons}
          <Tags tags={tags} />
          <Title>{title}</Title>
          {body.map((todo) => (
            <PostContent key={todo}>{todo}</PostContent>
          ))}
        </PostViewerWrapper>
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;

{
  /* <PostContent
  dangerouslySetInnerHTML={{
    __html: body,
  }}
/>; */
}
