import React from 'react';
import Timer from '../Timer';
import Checklist from '../Checklist';
import './index.css';

function Overlay (props) {

  return (
    <div className='overlay'>
      <Timer gameOver={props.gameOver} secondsElapsed={props.secondsElapsed} updateTime={props.updateTime} />
      <Checklist charList={props.charList} />
    </div>
  );
}

export default Overlay;