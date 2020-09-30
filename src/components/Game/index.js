import React, { useState, useEffect } from 'react';
import Photo from '../Photo';
import Overlay from '../Overlay';
import charactersToFind from '../../data/wembleyCharacters.js';
import './index.css';

function Game() {
  const [charList, setCharList] = useState(charactersToFind);

  useEffect(() => {
    console.log(`<Game /> charList:`);
    console.log(charList);
    setCharList(charList);
  }, [charList]);

  function updateCharList (newCharList) {
    console.log('CharList updated!');
    console.log(charList);
    setCharList(newCharList);
  }

  return (
    <div id="game">
        <Photo charList={charList} updateCharList={updateCharList} />
        <Overlay charList={charList} />
    </div>
  );
}

export default Game;