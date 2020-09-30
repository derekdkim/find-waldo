import React from 'react';
import Character from '../Character';
import './index.css';

function Checklist (props) {
  
  return(
    <div>
      <p>Find these characters:</p>
      <hr id='divider'></hr>
      <Character charInfo={props.charList.waldo}/>
      <Character charInfo={props.charList.centaur}/>
      <Character charInfo={props.charList.redcoat}/>
      <Character charInfo={props.charList.conquistador}/>
      <Character charInfo={props.charList.sumo}/>
    </div>
  );
}

export default Checklist;