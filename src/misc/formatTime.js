const formatTime = (timeInSec) => {
  const min = Math.floor(timeInSec / 60);
  const sec = Math.floor(timeInSec % 60);

  const formattedMin = min >= 10 ? `${min}` : `0${min}`;
  const formattedSec = sec >= 10 ? `${sec}` : `0${sec}`;

  return `${formattedMin}:${formattedSec}`;
}

export default formatTime;