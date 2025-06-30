import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='pages'>
        <h1>Signup</h1>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Signup