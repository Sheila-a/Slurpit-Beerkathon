import React from 'react'
import LProp from '../../layouts/Login-prop/LProp'
import LSide from '../../layouts/Login-side'
import design from "./style.module.css"

const Login = () => {
  return (
    <div className={design.cont}>
      <LSide/>
      <LProp/>
    </div>
  )
}

export default Login
