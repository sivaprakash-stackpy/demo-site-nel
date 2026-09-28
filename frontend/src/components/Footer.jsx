import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Network Elements Ltd</h3>
            <p>Dublin's trusted partner for network engineering, IT support, and infrastructure solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Network Engineering</li>
              <li>IT Support</li>
              <li>Network Management</li>
              <li>IT Infrastructure</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Network Elements Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
