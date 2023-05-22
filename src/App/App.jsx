// import React from 'react';
// import logo from './logo.svg';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      Agur Xiberoa<br/>
      {/* <MemeSVGViewer meme={emptyMeme} image={undefined}/> */}
      <Button toto="name of prop" />
    </div>
  );
}

export default App;
