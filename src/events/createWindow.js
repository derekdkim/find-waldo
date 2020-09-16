import React from 'react';

function createWindow(event) {
  console.log("createWindow");
  var xPos = event.pageX;
  var yPos = event.pageY;

  const placeholderStyle = {
    border: '2px solid',
    position: 'absolute',
    top: `${yPos}px`,
    left: `${xPos}px`,
    width: '50px',
    height: '50px'
  }

  return(
    <div style={placeholderStyle}></div>
  );
}

export default createWindow;