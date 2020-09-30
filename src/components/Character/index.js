import React, { useState, useEffect } from 'react';
import './index.css';

function Character (props) {
  const [foundStatus, setFoundStatus] = useState(false);

  useEffect(() => {
    const found = props.charInfo.found;
    setFoundStatus(found);
  }, [props]);

  return (
    <p className={foundStatus ? 'found' : 'notFound'}>{props.charInfo.name}</p>
  );
}

export default Character;