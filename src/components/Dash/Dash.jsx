import React from 'react'
import design from "./style.module.css"

const Dash = (props) => {
  return (
    < div className={design.dash}>
        <div className={design.ico}>
       {props.ico} 
        </div>
      {props.name}
    </div>
  )
}

export default Dash
