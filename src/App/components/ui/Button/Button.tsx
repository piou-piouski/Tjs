import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

interface I_Buttonprops{
    onClickButton: Function
    style?: object
    bgColor: string
    children: string|React.ReactNode|Array<React.ReactNode|string>
    type?: 'submit'|'reset'|'button'
}

const Button:React.FC<I_Buttonprops> = (props) => {
    return <button onClick={(evt)=>{
        props.onClickButton();
    }} className={styles.Button}
        style={{...props.style, backgroundColor: props.bgColor}}
        type={props.type}
        >{props.children}</button>
    
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onClickButton: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['submit', 'reset', 'button'])
}
Button.defaultProps={
    bgColor: "lime",
    type: "reset"
}
export default Button;