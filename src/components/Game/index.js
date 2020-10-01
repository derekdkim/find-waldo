import React, { useState, useEffect } from 'react';
import Photo from '../Photo';
import Overlay from '../Overlay';
import charactersToFind from '../../data/wembleyCharacters.js';
import './index.css';

function Game() {
  const [charList, setCharList] = useState(charactersToFind);
  const [gameOver, setGameOver] = useState(false);
  const [secondsElapsed, updateTime] = useState(0);

  useEffect(() => {
    // Re-render component on state change
    setCharList(charList);
  }, [charList]);

  useEffect(() => {
    // Trigger Game Over flag if all 5 characters were found
    let foundCharacters = 0;

    for (let character in charList) {
      if (charList[character].found) {
        foundCharacters++;
      }
    }

    if (foundCharacters === 5) {
      setGameOver(true);
    }
  }, [charList]);

  useEffect(() => {
    if(gameOver) {
      console.log('The game is finished. Congratulations!');
    }
  }, [gameOver]);

  function updateCharList (newCharList) {
    setCharList(newCharList);
  }

  return (
    <div id="game">
        <Photo charList={charList} updateCharList={updateCharList} gameOver={gameOver} />
        <Overlay charList={charList} gameOver={gameOver} secondsElapsed={secondsElapsed} updateTime={updateTime} />
    </div>
  );
}

export default Game;