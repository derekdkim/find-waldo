import React, { useState, useEffect } from 'react';

function Character (props) {
  const [foundStatus, setFoundStatus] = useState(props.foundStatus);
  const [additionalStyle, setAdditionalStyle] = useState({});

  useEffect(() => {
    setFoundStatus(props.foundStatus);
  }, [props]);

  useEffect(() => {
    if (foundStatus) {
      console.log('foundStatus changed');
      setAdditionalStyle({
        'colour': 'green',
        'text-decoration': 'line-through'
      });
    }
  }, [foundStatus]);



  return (
    <p style={additionalStyle}>{props.name}</p>
  );
}

export default Character;