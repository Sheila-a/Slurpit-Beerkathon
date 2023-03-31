import React from 'react'
import Admin_Main from '../../layouts/Admin_Main/Admin_Main'
import Admin_Sidebar from '../../layouts/Admin_Sidebar/Admin_Sidebar'
import design from "./style.module.css"

const Admindb = () => {
  return (
    <div className={design.cont}>
     <Admin_Sidebar/>
     <Admin_Main />
    </div>
  )
}

export default Admindb
