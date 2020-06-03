import React, { useState, useCallback } from 'react';
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

const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지않음
      setLocalTags([...localTags, tag]);
    },
    [localTags],
  );

  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤후 등록
      setInput('');
    },
    [input, insertTag],
  );

  return (
    <TagBoxBlock>
      <div className="tagBox">
        <TagList tags={localTags} onRemove={onRemove} />
      </div>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="Tag input" value={input} onChange={onChange} />
      </TagForm>
    </TagBoxBlock>
  );
};

export default TagBox;
