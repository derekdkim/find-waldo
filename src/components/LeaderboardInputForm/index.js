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
      <h1>You found them all!</h1>
      <p>Would you like to enter the leaderboard?</p>
      <p>Your Time: {formatTime(secondsElapsed)}</p>
      <label htmlFor='name-input'>Your Name:</label>
      <input id='name-input' type='text' onChange={handleChange}></input>
      <div id='button-container'>
        <button className='form-btn' id='accept-btn' onClick={handleSubmit}>Submit</button>
        <button className='form-btn' id='decline-btn' onClick={handleExit}>I'll Pass</button>
      </div>

    </div>
  );
}

export default LeaderboardInputForm;