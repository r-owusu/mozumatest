import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='pages'>
        <h1>Login</h1>
        <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Login