import React, { useState, useEffect } from 'react';
import Photo from '../Photo';
import Overlay from '../Overlay';
import charactersToFind from '../../data/wembleyCharacters.js';
import './index.css';

function Game() {
  const [charList, setCharList] = useState(charactersToFind);

  useEffect(() => {
    setCharList(charList);
  }, [charList]);

  return (
    <div id="game">
        <Photo charList={charList} setCharList={setCharList}/>
        <Overlay charList={charList} />
    </div>
  );
}

export default Game;