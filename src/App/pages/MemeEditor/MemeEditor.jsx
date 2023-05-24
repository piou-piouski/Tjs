import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme';
import MemeForm from '../../components/functionnal/MemeForm/MemeForm';
import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';
import { useSelector } from 'react-redux';

function MemeEditor(props) {
  return (
    <>
    {/* <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id === meme.imageId)} basePath='' /> */}
    {/* <MemeForm meme={meme} images={imgs} onMemeChange={(meme)=>{setmeme(meme);}}/> */}
    <MemeViewer/>
    <StoreMemeForm/>
    </>
  )
}

MemeEditor.propTypes = {
    id: PropTypes.number
}

export default MemeEditor


function MemeViewer()
{
    const meme = useSelector(s => s.current)
    const imgs = useSelector(s => s.listes.images.find((img)=>img.id === meme.imageId))
    return (
        <MemeSVGViewer meme={meme} image={imgs} basePath='' />
    
      )
}