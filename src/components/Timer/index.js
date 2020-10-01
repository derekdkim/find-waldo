import React, { useEffect } from 'react';

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

  const formatTime = (timeInSec) => {
    const min = Math.floor(timeInSec / 60);
    const sec = Math.floor(timeInSec % 60);

    const formattedMin = min >= 10 ? `${min}` : `0${min}`;
    const formattedSec = sec >= 10 ? `${sec}` : `0${sec}`;

    return `${formattedMin}:${formattedSec}`;
  }

  return (
  <p>{formatTime(secondsElapsed)}</p>
  );
}

export default Timer;