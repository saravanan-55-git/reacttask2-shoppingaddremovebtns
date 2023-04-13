import React from 'react'

const Button = ({name, bgClr,clr,onClick}) => {
    return (
        <button
        style = {{backgroundcolor:bgClr, color:clr}}
        className = 'my-btn'
        onClick = {onClick}
        >
            </button>
    )
}

export default Button