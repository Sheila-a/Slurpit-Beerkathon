import React from 'react'
import design from "./style.module.css"
import { Link } from 'react-router-dom'
import Button from '../../components/Button/button'

const LProp = () => {
    return (
        <div className={design.cont}>
          <div className={design.card}>
            <div className={`design.title`}>
              <h2>Login to your Account</h2>
            </div>
             
            <div className={design.fields}>
              <p>Company email</p>
              <input type="email" />
            </div>
            <div className={design.fields}>
              <p>Employee ID</p>
              <input type="text"    />
            </div>
            <div className={design.fields}>
              <p>Password</p>
              <input type="password"  />
            </div>
            <div className={design.flexa}>
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Button className={design.btn} name="Continue"   />
            <p className={design.p}>Already have an account? <span>
              <Link to="/login">
              Login</Link></span></p>
            </div>
          
        </div>
      )
}

export default LProp
