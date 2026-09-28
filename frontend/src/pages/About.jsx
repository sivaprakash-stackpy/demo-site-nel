import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>About Network Elements Ltd</h1>
          <p>Your Trusted IT Partner in Dublin</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>Welcome to NETWORK ELEMENTS - Your Trusted IT Partner. At Network Elements, we provide innovative IT solutions that drive your business forward. With a proven track record of delivering exceptional results, we offer a comprehensive range of services tailored to meet your unique needs.</p>
              <p>We endeavour to provide top-notch Managed IT Services marked by rapid response and efficient turnaround. Our commitment to excellence goes beyond words. It's reflected in our actions and results. We don't just deliver services; we deliver peace of mind, efficiency, and growth.</p>
              <p>Join hands with Network Elements and experience a new era of IT solutions. Contact us today to embark on a journey towards enhanced productivity, security and innovation.</p>
            </div>
            <div className="about-image">
              <div className="about-visual">
                <div className="server-rack">
                  <div className="server server-1"></div>
                  <div className="server server-2"></div>
                  <div className="server server-3"></div>
                  <div className="server server-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p>Uptime Guarantee</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions. Transparency, honesty and ethical conduct guide our decisions, fostering trust and credibility with our stakeholders.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer-Centric</h3>
              <p>Our customers are at the heart of our business. We are dedicated to understanding their needs, exceeding their expectations and consistently delivering value that enhances their experiences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Rapid Response</h3>
              <p>We endeavour to provide top-notch Managed IT Services marked by rapid response and efficient turnaround, ensuring minimal downtime for your business.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Our commitment to excellence goes beyond words. It's reflected in our actions and results. We don't just deliver services; we deliver peace of mind, efficiency, and growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
