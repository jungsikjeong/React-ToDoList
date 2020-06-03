import React from 'react';
import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
    </Responsive>
  );
};

export default WritePage;
