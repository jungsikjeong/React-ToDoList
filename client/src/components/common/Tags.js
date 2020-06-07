import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 0.5rem;
  padding: 0 1rem;

  .tag {
    display: flex;
    font-size: 0.8rem;
    margin: 0.5rem 0 0.5rem 0.3rem;
    cursor: pointer;
    color: #495057;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to="#" key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;

// const Tags = ({ tags }) => {
//     return (
//       <TagsBlock>
//         {tags.map((tag) => (
//           <Link className="tag" to={`/?tag=${tag}`} key={tag}>
//             #{tag}
//           </Link>
//         ))}
//       </TagsBlock>
//     );
//   };
