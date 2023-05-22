import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    return <button onClick={(evt)=>{
        props.onClickButton();
    }} className={styles.Button}
        style={{...props.style, backgroundColor: props.bgColor}}
        >{props.children}</button>
    
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onClickButton: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    style: PropTypes.object
}

export default Button;