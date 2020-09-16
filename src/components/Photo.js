import React from 'react';
import './styles/Photo.css';

class Photo extends React.Component {
  constructor() {
    super();
    this.state = {
      windowStyle: {},
      windowExists: false
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("createWindow");
    var xPos = event.pageX;
    var yPos = event.pageY;
  
    const placeholderStyle = {
      border: '2px solid',
      position: 'absolute',
      top: `${yPos - 25}px`,
      left: `${xPos - 25}px`,
      width: '50px',
      height: '50px'
    }

    this.setState({ 
      windowStyle: placeholderStyle,
      windowExists: true
    });
  }

  render() {
    let window;
    if (this.state.windowExists) {
      window = <div style={this.state.windowStyle}></div>;
    } else {
      window = <div></div>;
    }
    return (
      <div>
        <img 
          src='https://firebasestorage.googleapis.com/v0/b/find-waldo-8be9b.appspot.com/o/WheresWallyAtWembley_6.jpg?alt=media&token=bc667aaf-ae09-476b-b226-8a4d6b8207c5'
          alt='Waldo'
          className='Photo'
          onClick={this.handleClick}
        />
        {window}
      </div>

    );
  }
}

export default Photo;