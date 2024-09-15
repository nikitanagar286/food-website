import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const LoginPopup = ({setShowLogin}) => {
  const [curState,setCurrState]=useState("sign up")
  return (
    <div className='loginpopup'>

<form 
className="login-popup-container">
<div className="login-popup-tittle">
  <h2>{curState}</h2>
  < CloseIcon  className="img-logo "onClick={()=> setShowLogin(false)} src="" alt="on"/>
  </div>
  <div className="login-popup-inputs">
    {curState==="Login"? <></>:<input type="text" placeholder='your name' required/>}

<input type="email" placeholder='enter your mail' required/>
<input type="password" placeholder='password' required/>


  </div>
  <button type="button">{curState==="signup"?"create account":"Login"}</button>
  <div className="login-popup-condition">

    <input type="checkbox"/>
    <p>By  Continuing, i agree to the terms of use & privacy policy</p>
  </div>
  {curState==="Login"?  <p>Create a New Account? <span onClick={()=>setCurrState("signup")}>click here</span></p>:  <p>Already have an account <span  onClick={()=>setCurrState("Login")}>Login here</span></p>}








</form>


    </div>
  )
}

export default LoginPopup