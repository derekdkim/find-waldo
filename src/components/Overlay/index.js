import React from 'react';
import Timer from '../Timer';
import Checklist from '../Checklist';
import './index.css';

function Overlay (props) {

  return (
    <div className='overlay'>
      <Timer />
      <Checklist charList={props.charList}/>
    </div>
  );
}

export default Overlay;