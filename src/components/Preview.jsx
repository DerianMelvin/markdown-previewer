import React from 'react';

const Preview = (props) => {
  return (
    <div>
      <textarea id="preview" value={props.markdown}></textarea>
    </div>
  );
}
 
export default Preview;