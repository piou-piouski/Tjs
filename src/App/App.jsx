import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  // let counter = 0;
  const [counter, setcounter] = useState(0)
  
  
  
  useEffect(() => {
    console.log('valeur etatique = ' + counter);
    /*return () => {
      
    };*/
  }, [counter])




  return (
    <div className="App">
      Agur Xiberoa : {counter}<br/>
      <Button bgColor='tomato' style={{bgColor:'tomato'}} onClickButton={()=>{
        // counter--;
        setcounter(counter-1);
        console.log(counter);
      }}>
        1
        {/* <img src="https://cdn.pixabay.com/photo/2012/04/26/19/45/check-42926_960_720.png" /> */}
      </Button>

      <Button bgColor='lime' onClickButton={()=>{
        // counter++;
        setcounter(counter+1);
        console.log(counter);
        // console.log('%c%s', 'color:tomato');
        // alert('je clique', moi);
      }}>
        +1
      </Button>
    </div>
  );
}

export default App;
