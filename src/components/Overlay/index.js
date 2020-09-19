import React from 'react';
import Timer from '../Timer';
import Checklist from '../Checklist';

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