import React from 'react';
import Select from '../Select';
import './index.css';

class Photo extends React.Component {
  constructor() {
    super();
    this.state = {
      windowStyle: {},
      selectStyle: {},
      windowExists: false
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var rect = event.target.getBoundingClientRect();

    var xPos = event.clientX;
    var yPos = event.clientY;

    const selectPos = {
      clientX: xPos,
      clientY: yPos,
      relX: (xPos - rect.left) / event.target.clientWidth,
      relY: (yPos - rect.top) / event.target.clientHeight
    }

    this.setState({ 
      selectPos: selectPos,
      windowExists: true
    });
  }

  render() {
    let select;

    if (this.state.windowExists) {
      select = <Select pos={this.state.selectPos} />
    } else {
      select = <div></div>
    }

    return (
      <div>
        <img 
          src='https://firebasestorage.googleapis.com/v0/b/find-waldo-8be9b.appspot.com/o/WheresWallyAtWembley_6.jpg?alt=media&token=bc667aaf-ae09-476b-b226-8a4d6b8207c5'
          alt='Waldo'
          className='Photo'
          onClick={this.handleClick}
        />
        {select}
      </div>

    );
  }
}

export default Photo;