import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src='../../assets/images/logo.jpg' alt='Mozuma Logo'/>
      </Link>

      <nav>
        <ul>
          <li><NavLink to='/suites' className={({ isActive }) => isActive ? 'active' : ''}>Suites</NavLink></li>

          <li><NavLink to='/events' className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>

          <li><NavLink to='/restaurant' className={({ isActive }) => isActive ? 'active' : ''}>Restaurant</NavLink></li>

          <li><NavLink to='/tours' className={({ isActive }) => isActive ? 'active' : ''}>Tours</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header