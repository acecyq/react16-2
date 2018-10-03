import React from 'react';

const CharComponent = (props) => {
  return (
    <div style={props.style} onClick={props.click}>{props.text}</div>
  );
}

export default CharComponent;
