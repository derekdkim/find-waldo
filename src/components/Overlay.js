import React from 'react';
import Timer from './Timer.js';
import Checklist from './Checklist.js';

class Overlay extends React.Component {
  render() {
    return (
      <div>
        <Timer />
        <Checklist />
      </div>
    );
  }
}

export default Overlay;