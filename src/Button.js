import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    
  return (
    <button 
        type="button"
        onClick= {onClick}
        style={{backgroundColor:color}}
    >
        {text}    
    </button>
  )
}
Button.defaultProps={
    color:"green",
    text:"button"
}
Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button