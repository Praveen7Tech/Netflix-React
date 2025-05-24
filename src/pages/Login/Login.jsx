import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
  const [isSignform, setIsSignform] = useState(true)
  const Signup = ()=>{
    setIsSignform(!isSignform)
  }
  return (
    <div className='login'>
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className='login-logo'/>
       <div className="login-form">
        <h1>{isSignform ? "Sign In" : "Sign Up"}</h1>
        <form>
          {!isSignform &&  (<input type="test" placeholder='Full name'/>)}
          
          <input type="email" placeholder='Enter Email'/>
          <input type="password" placeholder='Enter password'/>
          <button className='signin-btn'>{isSignform ? "Sign In" : "Sign Up"}</button>
          <h3>OR</h3>
          <button className='sign-in-code'>Use a sign-in code</button>
          <span className='forget-pass'>Forget password?</span>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <div className="form-switch">
              <p>{isSignform ? "New to Netflix?" : "Already registered please"}<span onClick={Signup}>{isSignform ? "Sign up now." : "Sign in now."}</span></p>
            </div>
            <p className='recaptcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Login
