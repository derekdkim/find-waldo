import React, { useEffect } from 'react';
import formatTime from '../../misc/formatTime.js';

function Timer (props) {
  const { secondsElapsed, updateTime, gameOver } = props;

  useEffect(() => {
    let interval;
    if (!gameOver) {
      interval = setInterval(() => {
        updateTime(secondsElapsed => secondsElapsed + 1);
      }, 1000);
    } else if (gameOver) {
      clearInterval(interval);
    }
    // ClearInterval on Unmount
    return () => clearInterval(interval);
  }, [gameOver, secondsElapsed, updateTime]);

  return (
  <p>{formatTime(secondsElapsed)}</p>
  );
}

export default Timer;