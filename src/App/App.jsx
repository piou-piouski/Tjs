import React, {useState, useEffect} from 'react';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import './App.css';

import MemeForm from './components/functionnal/MemeForm/MemeForm';

import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';

import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';


function App(props) {
  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow>
        <MemeSVGViewer meme={emptyMeme} image={undefined} />
        <MemeForm />
      </FlexW1Grow>
      <Footer />
    </FlexH3Grow>

  );
}

export default App;
