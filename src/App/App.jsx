import React, {useState, useEffect} from 'react';
import { MemeSVGViewer, MemeSVGThumbnail, emptyMeme } from 'orsys-tjs-meme';
import './App.css';

import MemeForm from './components/functionnal/MemeForm/MemeForm';

import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';

import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';


import MemeThumbnail from './pages/MemeThumbnail/MemeThumbnail';

import MemeEditor from './pages/MemeEditor/MemeEditor';


function App(props) {
  const [meme, setmeme] = useState(emptyMeme);
  const [imgs, setimgs] = useState([]);
  const [memes, setmemes] = useState([]);

  useEffect(() => {
    const prImg = fetch(`http://localhost:5679/images`)
    .then(r=>r.json())
    //.then(arr=>setimgs(arr));
    const prMeme = fetch(`http://localhost:5679/memes`)
    .then(r=>r.json())
    //.then(arr=>setmemes(arr));
    Promise.all([prImg, prMeme])
    .then(arr=> {
      setimgs(arr[0]);
      setmemes(arr[1])
    })
  }, [])


  return (
    <FlexH3Grow>
      <Header />
      <Navbar />
      <FlexW1Grow>
        <Routes>
        {/* <Route path='/thumbmail' element={<MemeSVGThumbnail memes={memes} images={imgs} basePath=''/>} /> */}

        <Route path='/' element={<h1>Page d'accueil</h1>} />
        <Route path='/thumbnail' element={<MemeThumbnail/>} />
        <Route path='/meme' element={<MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id === meme.imageId)} basePath='' />} />
        {/* <Route path='/add' element={
        <>
          <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id === meme.imageId)} basePath='' />
          <MemeForm meme={meme} images={imgs} onMemeChange={(meme)=>{setmeme(meme);}}/>
        </>} /> */}
        <Route path='/add' element={
          <MemeEditor/>
        } />




        </Routes>
      </FlexW1Grow>
      <Footer />
    </FlexH3Grow>

  );
}
// function Meme(props){
//   return(
//     <>
//     <MemeSVGViewer meme={props.meme} image={props.imgs.find((img)=>img.id === props.meme.imageId)} basePath='' />
//     <MemeForm meme={props.meme} images={props.imgs} onMemeChange={props.onMemeChange}/>
//     </>
//   )
// }

export default App;
