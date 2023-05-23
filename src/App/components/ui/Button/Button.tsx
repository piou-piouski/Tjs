import React, {useState, useEffect} from 'react'
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
    const [click, setclick] = useState(false)

    useEffect(() => {
        console.log('valeur etatique = ' + click);
        if(click)
        {
            //console.log('if = ' + click);
            setTimeout(()=>{setclick(false)}, 500)
        }
        /*return () => {
          
        };*/
      }, [click])

    return <button onClick={(evt)=>{
        props.onClickButton();
        setclick(true);
    }} className={!click?styles.Button:styles.Button+' '+styles.clicked}
        style={{...props.style, backgroundColor: props.bgColor}}
        type={props.type}
        >{props.children}</button>
    
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    onClickButton: PropTypes.func.isRequired,
    // onClickButton: PropTypes.func,
    bgColor: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['submit', 'reset', 'button'])
}
Button.defaultProps={
    //bgColor: "lime",
    type: "reset"
}
export default Button;