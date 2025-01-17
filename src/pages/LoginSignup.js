import React from 'react'
import './CSS/LoginSignup.css';

function LoginSignup() {
  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
          <h1>Sign up</h1>
          <div className='loginsignup-fields'>
             <input type='text' placeholder='your Name'/>
             <input type='email' placeholder='Email ID'/>
             <input type='password' placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' placeholder='' name='' id=''/>
            <p>By Continue, i agree to the terms of use and privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup;
