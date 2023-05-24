import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGThumbnail } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';
import style from './MemeThumbnail.module.css'
function MemeThumbnail(props) {
    const memes = useSelector(s => s.listes.memes)
    const imgs = useSelector(s => s.listes.images)
    return (
        <div className={style.Mt}>
            <MemeSVGThumbnail memes={memes} images={imgs} basePath='' />
        </div>
    )
}



export default MemeThumbnail
