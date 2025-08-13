import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-page'>
      <div>
        <img src='../../assets/images/suites/suite-7.jpg' />
      </div>

      <div className='login-inner'>
        <h2>Log in to Exclusive </h2>
        <p>Enter your details below</p>

        <form>
          <input type='text' placeholder='Email or Phone Number' />
          <input type='password' placeholder='Password' />

          <div className='login-div'>
            <input type='button' className='login-button' value='Log In' />

            <Link to=''>Forgot Passoword?</Link>
          </div>
        </form>

        <Link to="" className='google-login'>
          <img src='../../assets/icons/google-1.png'/>
          <p>Sign up with Google</p>
        </Link>

        <p className='login-option'>Don't have an account? <Link to="/signup">Sign Up</Link></p>


      </div>
    </div>
  )
}

export default Login