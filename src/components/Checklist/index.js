import React from 'react';
import Character from '../Character';
import './index.css';

function Checklist (props) {
  return(
    <div>
      <p>Find these characters:</p>
      <hr id='divider'></hr>
      <Character name='Waldo' foundStatus={props.charList.waldo.found}/>
      <Character name='Centaur' foundStatus={props.charList.centaur.found}/>
      <Character name='British Redcoat' foundStatus={props.charList.redcoat.found}/>
      <Character name='Conquistador' foundStatus={props.charList.conquistador.found}/>
      <Character name='Sumo wrestler' foundStatus={props.charList.sumo.found}/>
    </div>
  );
}

export default Checklist;