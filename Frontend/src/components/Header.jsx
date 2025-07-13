import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>Mozuma</Link>

      <nav>
        <ul>
          <li><Link to='/events' className='active'>Suites</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/restaurant'>Restaurant</Link></li>
          <li><Link to='/tours'>Tours</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header