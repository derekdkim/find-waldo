import React, { useEffect, useState } from 'react';
import Select from '../Select';
import './index.css';

function Photo (props) {
  const [selectPos, setSelectPos] = useState({});
  const [windowDisplay, setWindowDisplay] = useState(false);

  function handleClick(event) {
    if (!props.gameOver) {
      var rect = event.target.getBoundingClientRect();

      var xPos = event.clientX;
      var yPos = event.clientY;
  
      const selectPos = {
        clientX: xPos,
        clientY: yPos,
        relX: (xPos - rect.left) / event.target.clientWidth,
        relY: (yPos - rect.top) / event.target.clientHeight
      }
  
      setSelectPos(selectPos);
      setWindowDisplay(true);
    }
  }

  useEffect(() => {
    if (props.gameOver) {
      setWindowDisplay(false);
    }
  }, [props]);

  return (
    <div>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/find-waldo-8be9b.appspot.com/o/WheresWallyAtWembley_6.jpg?alt=media&token=bc667aaf-ae09-476b-b226-8a4d6b8207c5'
        alt='Waldo'
        className='Photo'
        onClick={handleClick}
      />
      {windowDisplay ? <Select pos={selectPos} charList={props.charList} updateCharList={props.updateCharList} /> : <div></div>}
    </div>

  );
}

export default Photo;