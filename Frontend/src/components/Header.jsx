import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/'>Header</Link>

      <nav>
        <ul>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/restaurant'>Restaurant</Link></li>
          <li><Link to='/tours'>Tours</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Header