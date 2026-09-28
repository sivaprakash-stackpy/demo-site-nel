import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    })
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const getError = (field) => {
    if (!touched[field]) return null
    if (field === 'email' && !validateEmail(formData.email)) {
      return 'Please enter a valid email address'
    }
    if (!formData[field]) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    })

    // Check for errors
    const hasErrors = Object.keys(formData).some(key => !formData[key] || (key === 'email' && !validateEmail(formData.email)))
    if (hasErrors) return

    setStatus('submitting')

    try {
      const response = await fetch('http://localhost:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTouched({})
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Your name"
                    className={getError('name') ? 'error' : ''}
                  />
                  {getError('name') && <span className="error-text">{getError('name')}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="your@email.com"
                    className={getError('email') ? 'error' : ''}
                  />
                  {getError('email') && <span className="error-text">{getError('email')}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="How can we help?"
                    className={getError('subject') ? 'error' : ''}
                  />
                  {getError('subject') && <span className="error-text">{getError('subject')}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    className={getError('message') ? 'error' : ''}
                  />
                  {getError('message') && <span className="error-text">{getError('message')}</span>}
                </div>
                <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <div className="success-message">Message sent successfully!</div>
                )}
                {status === 'error' && (
                  <div className="error-message">Failed to send message. Please try again.</div>
                )}
              </form>
            </div>

            <div className="contact-info-wrapper">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Address</h4>
                    <p>Dublin, Ireland</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>info@networkelements.ie</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+353 1 234 5678</p>
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
