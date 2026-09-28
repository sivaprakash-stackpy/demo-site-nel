import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>NETWORK ELEMENTS</h1>
          <h2 className="tagline">EXCELLENCE IN EVERY BYTE</h2>
          <p>Your Trusted IT Partner - We endeavour to provide top-notch Managed IT Services marked by rapid response and efficient turnaround</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Our Services</Link>
            <Link to="/contact" className="btn-secondary">Get A Quote</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="network-animation">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="connection conn-1"></div>
            <div className="connection conn-2"></div>
            <div className="connection conn-3"></div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Team</h3>
              <p>Certified professionals with years of experience in network engineering and IT solutions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>24/7 support with rapid response times to minimize downtime and keep your business running.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Reliable Solutions</h3>
              <p>Proven track record of delivering robust and scalable IT infrastructure solutions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Approach</h3>
              <p>Stay ahead with cutting-edge technology and modern network management practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your IT Infrastructure?</h2>
          <p>Join hundreds of satisfied businesses across Ireland who trust Network Elements Ltd.</p>
          <Link to="/contact" className="btn-cta">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
