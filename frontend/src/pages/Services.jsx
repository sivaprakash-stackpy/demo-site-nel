import { useState, useEffect } from 'react'
import './Services.css'

const API_URL = 'http://localhost:8000'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/services`)
      const data = await response.json()
      if (data.length === 0) {
        setServices(getDefaultServices())
      } else {
        setServices(data)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
      setServices(getDefaultServices())
    }
  }

  const getDefaultServices = () => [
    { id: 1, title: 'Network Provisioning', description: 'Design and implement robust network architectures tailored to your business needs. From LAN/WAN setup to complex enterprise networks.', icon: '🌐', order: 1 },
    { id: 2, title: 'Rack and Stack & Maintenance', description: 'Professional server rack installation, cabling, and ongoing maintenance to ensure optimal performance and organization.', icon: '🏗️', order: 2 },
    { id: 3, title: 'IOT Solutions', description: 'Internet of Things implementation and management for smart business operations and connected device ecosystems.', icon: '🔌', order: 3 },
    { id: 4, title: 'Firewall and Endpoints', description: 'Comprehensive security solutions including firewall configuration, endpoint protection, and network security management.', icon: '🔒', order: 4 },
    { id: 5, title: 'Laptop & Desktop Support', description: '24/7 technical support for all your devices. Rapid response times and expert troubleshooting to keep your business running.', icon: '💻', order: 5 },
    { id: 6, title: 'Wireless Survey', description: 'Professional wireless network site surveys, planning, and optimization for seamless connectivity throughout your premises.', icon: '�', order: 6 },
    { id: 7, title: 'Disposal of IT Equipment', description: 'Secure and environmentally responsible disposal of IT equipment in compliance with data protection regulations.', icon: '♻️', order: 7 },
    { id: 8, title: 'Audio Visual', description: 'Complete audio-visual solutions for meeting rooms, conference spaces, and collaborative work environments.', icon: '�', order: 8 }
  ]

  return (
    <div className="services-page">
      <section className="services-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT and Network Solutions for Your Business</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We analyze your current infrastructure and understand your business needs.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We design a customized solution tailored to your requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Our experts implement the solution with minimal disruption to your operations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Support</h3>
              <p>Ongoing support and maintenance to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
