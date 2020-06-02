import React from 'react';
import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';
import Editor2 from '../components/write/Editor2';

const WritePage = () => {
  return (
    <Responsive>
      {/* <EditorContainer /> */}
      <Editor2 />
    </Responsive>
  );
};

export default WritePage;
