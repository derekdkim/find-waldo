import React from 'react';
import Character from './Character.js';

class Checklist extends React.Component {
  render() {
    return(
      <div>
        <p>Find these characters:</p>
        <hr></hr>
        <Character name='Waldo' />
        <Character name='Centaur' />
        <Character name='British Redcoat' />
        <Character name='Conquistador' />
        <Character name='Sumo wrestler' />
      </div>
    );
  }
}

export default Checklist;