import React, { useState, useEffect } from 'react';
import './index.css';

function Select(props) {
  const [selectionPos, setSelectionPos] = useState(props.pos);
  const [selectionOffset, setSelectionOffset] = useState(0);

  useEffect(() => {
    setSelectionPos(props.pos);
  }, [props]);

  useEffect(() => {
    // Selection Dropdown Menu offset from center by 50 closer to the center of the screen
    setSelectionOffset(selectionPos.relY > 0.5 ? -45 : 30);
  }, [selectionPos]);

  return(
    <div>
      <div className='selectionWindow' style={{ 
          left: `${selectionPos.clientX - 25}px`, 
          top: `${selectionPos.clientY - 25}px` 
        }}>
      </div>
      <select className='selectionMenu' style={{
        left: `${selectionPos.clientX - 50}px`,
        top: `${selectionPos.clientY + selectionOffset}px`
      }}>
        <option value='waldo'>Waldo</option>
        <option value='centaur'>Centaur</option>
        <option value='redcoat'>British Redcoat</option>
        <option value='conquistador'>Conquistador</option>
        <option value='sumo'>Sumo Wrestler</option>
      </select>
    </div>

  );
}

export default Select;