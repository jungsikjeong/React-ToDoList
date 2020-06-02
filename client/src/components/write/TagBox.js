import React from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
  width: 100%;
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 100%;
  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    background: #2f3238;
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
    color: white;
    :focus {
      background: #3c414a;
      margin-top: 0.2rem;
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
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
      <TagList tags={['태그1']} />
      <TagForm>
        <input placeholder="Tag input" />
      </TagForm>
    </TagBoxBlock>
  );
};

export default TagBox;
