import React, { useState } from 'react';
import writeToLeaderboard from '../../firebase/writeToLeaderboard.js';
import formatTime from '../../misc/formatTime.js';
import './index.css';

function LeaderboardInputForm (props) {
  const [nameInput, setNameInput] = useState('');
  const [hideForm, toggleHideForm] = useState(false);
  const { secondsElapsed, setSubmittedScore } = props;

  const handleChange = (event) => {
    setNameInput(event.target.value);
  }

  const handleSubmit = () => {
    // Write entry to server
    writeToLeaderboard(nameInput, secondsElapsed);
    
    // Remove form
    setSubmittedScore(true);
    toggleHideForm(true);
  }

  const handleExit = () => {
    setSubmittedScore(true);
    toggleHideForm(true);
  }

  return(
    <div id='leaderboardFormContainer' className={hideForm ? 'hidden' : 'inputForm'}>
      <p>Your Time: {formatTime(secondsElapsed)}</p>
      <label htmlFor='name-input'>Your Name:</label>
      <input id='name-input' type='text' onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleExit}>I'll Pass</button>
    </div>
  );
}

export default LeaderboardInputForm;