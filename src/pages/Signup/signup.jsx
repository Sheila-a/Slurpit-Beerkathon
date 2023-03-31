import React from 'react'
import Sup from '../../components/Sign-up-prop/Sup'
import LSide from '../../layouts/Login-side'
import design from "./style.module.css"

const Signup = () => {
  return (
    <div className={design.cont}>
      <LSide/>
     <Sup/>
    </div>
  )
}

export default Signup
