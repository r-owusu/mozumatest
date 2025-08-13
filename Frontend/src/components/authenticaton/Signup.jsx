import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
     <div className='login-page'>
            <div>
              <img src='../../assets/images/suites/suite-7.jpg'/>
            </div>
    
            <div className='login-inner'>
              <h2>Create an account</h2>
              <p>Enter your details below</p>
    
              <form>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email or Phone Number'/>
                <input type='password' placeholder='Password'/>
    
                <input type='button' className='signup-button' value='Create an account'/>
              </form>
    
              <p className='login-option'>Already have an account? <Link to="/login">Log In</Link></p>
    
            </div>
        </div>
  )
}

export default Signup