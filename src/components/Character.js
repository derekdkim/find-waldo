import React from 'react';

class Character extends React.Component {
  render() {
    return(
    <p>{this.props.name}</p>
    );
  }
}

export default Character;