import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/hero.png" alt="Network Elements Logo" className="logo-image" />
          <span className="logo-text">Network Elements Ltd</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/engineers" className={location.pathname === '/engineers' ? 'active' : ''}>Engineers</Link>
          </li>
          <li>
            <Link to="/contact" className="btn-quote">Get A Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
