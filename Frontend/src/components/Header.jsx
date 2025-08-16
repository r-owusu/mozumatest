
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css'; // make sure to link your CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <Link to='/' className='header-logo'>
        <img src='../../assets/images/logo.jpg' alt='Mozuma Logo' />
        <h1>Mozuma OceanFront Suites</h1>
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar rotate1' : 'bar'}></span>
        <span className={menuOpen ? 'bar fade' : 'bar'}></span>
        <span className={menuOpen ? 'bar rotate2' : 'bar'}></span>
      </div>

      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <ul style={{marginRight: '20px',padding: '20'}}>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to='/suites' className={({ isActive }) => isActive ? 'active' : ''}>Suites</NavLink></li>
          <li><NavLink to='/events' className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink></li>
          <li><NavLink to='/restaurant' className={({ isActive }) => isActive ? 'active' : ''}>Restaurant</NavLink></li>
          <li><NavLink to='/tours' className={({ isActive }) => isActive ? 'active' : ''}>Tours</NavLink></li>
          <li><NavLink to='/login' className={({ isActive }) => isActive ? 'active' : ''}>LogIn</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
