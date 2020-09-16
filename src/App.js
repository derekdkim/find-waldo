import React from 'react';
import './App.css';
import Photo from './components/Photo.js';
import Overlay from './components/Overlay.js';

function App() {
  return (
    <div className="App">
        <Photo />
        <Overlay />
    </div>
  );
}

export default App;
