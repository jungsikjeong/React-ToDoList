import React from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  .tagBox {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 15rem;
  margin-left: auto;
  /* flex: 1; */
  input {
    margin-left: auto;
    outline: 0;
    border: 0;
    font-size: 1rem;
    background: #f8f9fa;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    padding: 0.5rem;
    min-width: 0;
    color: black;
    /* z-index: -1; */
    border-left: 1px solid black;
  }
`;

const Tag = styled.div`
  margin: 0.5rem 0 0.5rem 0.3rem;
  cursor: pointer;
  color: black;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({ tags }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  return (
    <TagBoxBlock>
      <div className="tagBox">
        <TagList tags={['태그1', '태그2']} />
      </div>
      <TagForm>
        <input placeholder="Tag input" />
      </TagForm>
    </TagBoxBlock>
  );
};

export default TagBox;
