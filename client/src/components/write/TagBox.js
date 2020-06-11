import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const TagBoxBlock = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  .tagBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const TagForm = styled.form`
  overflow: hidden;
  display: flex;
  width: 15rem;
  margin-left: auto;

  input {
    margin-left: auto;
    outline: 0;
    border: 0;
    font-size: 1rem;
    background: #fff9db;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    padding: 0.5rem;
    min-width: 0;
    color: #495057;
    /* z-index: -1; */
    border-left: 1px solid black;

    :focus::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

const Tag = styled.div`
  margin: 0.5rem 0 0.5rem 0.3rem;
  cursor: pointer;
  color: #495057;
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
    {tags && (
      <div className="tagBox">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
      </div>
    )}
  </TagListBlock>
));

const TagBox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags && localTags.includes(tag)) return;
      if (localTags === null || localTags === undefined) {
        console.log('localTags가 null입니다.');
        return;
      }
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
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

  // tags 값이 바뀔때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <TagList tags={localTags} onRemove={onRemove} />

      <TagForm onSubmit={onSubmit}>
        <input placeholder="Tag input" value={input} onChange={onChange} />
      </TagForm>
    </TagBoxBlock>
  );
};

export default TagBox;
