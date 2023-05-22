// import React from 'react';
// import logo from './logo.svg';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      Agur Xiberoa<br/>
      <Button style={{bgColor:'tomato'}} onClickButton={(moi)=>{
        // console.log('%c%s', 'color:tomato');
        // alert('je clique', moi);
      }}>
        Ok<br/>
        <img src="https://cdn.pixabay.com/photo/2012/04/26/19/45/check-42926_960_720.png" />
      </Button>
    </div>
  );
}

export default App;
