import React, { useState, useEffect } from 'react';
import './index.css';
import firebase from 'firebase';
import firebaseConfig from '../../firebase.config.js';

import fetchData from '../../firebase/fetchData.js';

function Select(props) {
  const initialPos = props.pos;
  const [selectionPos, setSelectionPos] = useState(initialPos);
  const [selectionOffset, setSelectionOffset] = useState(0);

  // Update window position to latest mouse click position
  useEffect(() => {
    const propPos = props.pos;
    setSelectionPos(propPos);
  }, [props]);

  useEffect(() => {
    // Selection Dropdown Menu offset from center by 50 closer to the center of the screen
    setSelectionOffset(selectionPos.relY > 0.5 ? -45 : 30);
  }, [selectionPos]);

  // Listener for Dropdown Menu on Selection Window
  const handleChange = async (event) => {
    const selectedChar = event.target.value;

    // Initialize Firebase. Conditional calling prevents multiple initializations.
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }



    // Call Firestore DB to get data for matching value
    try {
      const refData = await fetchData(selectedChar);

      if (boundaryCheck(selectionPos.relX, refData.x) && boundaryCheck(selectionPos.relY, refData.y)) {
        let workingCharList = { ...props.charList };
        workingCharList[selectedChar].found = true;
        props.updateCharList(workingCharList);
        console.log('Correct!');
      } else {
        console.log('Incorrect!');
      }
      
    } catch (e) {
      console.log('Failed to call the server.', e);
    }

  }

  return (
    <div>
      <div className='selectionWindow' style={{ 
          left: `${selectionPos.clientX - 25}px`, 
          top: `${selectionPos.clientY - 25}px` 
        }}>
      </div>
      <select value='' className='selectionMenu' onChange={handleChange} style={{
        left: `${selectionPos.clientX - 50}px`,
        top: `${selectionPos.clientY + selectionOffset}px`
      }}>
        <option value='' disabled hidden>Which Character?</option>
        <option value='waldo'>Waldo</option>
        <option value='centaur'>Centaur</option>
        <option value='redcoat'>British Redcoat</option>
        <option value='conquistador'>Conquistador</option>
        <option value='sumo'>Sumo Wrestler</option>
      </select>
    </div>

  );
}

const boundaryCheck = (coord, ref) => {
  // Checks if a given set of coordinates are within += 0.3 of a reference coordinate
  const lowerRange = ref - 0.3;
  const upperRange = ref + 0.3;

  if (coord >= lowerRange && coord <= upperRange) {
    return true;
  } else {
    return false;
  }

}

export default Select;