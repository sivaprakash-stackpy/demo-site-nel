import { useState } from 'react'
import './Engineers.css'

function Engineers() {
  const [formData, setFormData] = useState({
    ticketNumber: '',
    customer: '',
    customerRef: '',
    site: '',
    techName: '',
    date: '',
    leftHomebase: '',
    onsite: '',
    offsite: '',
    arriveHomebase: '',
    distanceTraveled: '',
    remoteEngineer: '',
    localContact: '',
    tasks: '',
    travelFood: '',
    pn: '',
    sn: '',
    trackingNumber: ''
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

  const getError = (field) => {
    if (!touched[field]) return null
    const requiredFields = ['ticketNumber', 'customer', 'site', 'techName', 'date', 'tasks']
    if (requiredFields.includes(field) && !formData[field]) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      ticketNumber: true,
      customer: true,
      site: true,
      techName: true,
      date: true,
      tasks: true
    })

    // Check for errors
    const hasErrors = !formData.ticketNumber || !formData.customer || !formData.site || !formData.techName || !formData.date || !formData.tasks
    if (hasErrors) return

    setStatus('submitting')

    try {
      const response = await fetch('http://localhost:8000/api/engineer-reports/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          ticketNumber: '',
          customer: '',
          customerRef: '',
          site: '',
          techName: '',
          date: '',
          leftHomebase: '',
          onsite: '',
          offsite: '',
          arriveHomebase: '',
          distanceTraveled: '',
          remoteEngineer: '',
          localContact: '',
          tasks: '',
          travelFood: '',
          pn: '',
          sn: '',
          trackingNumber: ''
        })
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
    <div className="engineers-page">
      <section className="engineers-header">
        <div className="container">
          <h1>Engineers Support</h1>
          <p>Submit your site visit report</p>
        </div>
      </section>

      <section className="engineers-content">
        <div className="container">
          <div className="form-wrapper">
            <h2>Site Visit Report</h2>
            <form className="engineer-form" onSubmit={handleSubmit} noValidate>
              <div className="form-section">
                <h3>Ticket Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ticketNumber">Ticket Number *</label>
                    <input
                      type="text"
                      id="ticketNumber"
                      name="ticketNumber"
                      value={formData.ticketNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter ticket number"
                      className={getError('ticketNumber') ? 'error' : ''}
                    />
                    {getError('ticketNumber') && <span className="error-text">{getError('ticketNumber')}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="customer">Customer *</label>
                    <input
                      type="text"
                      id="customer"
                      name="customer"
                      value={formData.customer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter customer name"
                      className={getError('customer') ? 'error' : ''}
                    />
                    {getError('customer') && <span className="error-text">{getError('customer')}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="customerRef">Customer Ref/Ticket</label>
                    <input
                      type="text"
                      id="customerRef"
                      name="customerRef"
                      value={formData.customerRef}
                      onChange={handleChange}
                      placeholder="Enter customer reference"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="site">Site *</label>
                    <input
                      type="text"
                      id="site"
                      name="site"
                      value={formData.site}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter site name"
                      className={getError('site') ? 'error' : ''}
                    />
                    {getError('site') && <span className="error-text">{getError('site')}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Engineer Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="techName">Tech Name *</label>
                    <input
                      type="text"
                      id="techName"
                      name="techName"
                      value={formData.techName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter technician name"
                      className={getError('techName') ? 'error' : ''}
                    />
                    {getError('techName') && <span className="error-text">{getError('techName')}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="remoteEngineer">Remote Engineer</label>
                    <input
                      type="text"
                      id="remoteEngineer"
                      name="remoteEngineer"
                      value={formData.remoteEngineer}
                      onChange={handleChange}
                      placeholder="Enter remote engineer name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="localContact">Local Contact</label>
                    <input
                      type="text"
                      id="localContact"
                      name="localContact"
                      value={formData.localContact}
                      onChange={handleChange}
                      placeholder="Enter local contact"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={getError('date') ? 'error' : ''}
                    />
                    {getError('date') && <span className="error-text">{getError('date')}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Time & Travel</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="leftHomebase">Left Homebase</label>
                    <input
                      type="time"
                      id="leftHomebase"
                      name="leftHomebase"
                      value={formData.leftHomebase}
                      onChange={handleChange}
                      placeholder="Select time"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="onsite">Onsite</label>
                    <input
                      type="time"
                      id="onsite"
                      name="onsite"
                      value={formData.onsite}
                      onChange={handleChange}
                      placeholder="Select time"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="offsite">Offsite</label>
                    <input
                      type="time"
                      id="offsite"
                      name="offsite"
                      value={formData.offsite}
                      onChange={handleChange}
                      placeholder="Select time"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="arriveHomebase">Arrive Homebase</label>
                    <input
                      type="time"
                      id="arriveHomebase"
                      name="arriveHomebase"
                      value={formData.arriveHomebase}
                      onChange={handleChange}
                      placeholder="Select time"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="distanceTraveled">Distance Traveled (km)</label>
                    <input
                      type="number"
                      id="distanceTraveled"
                      name="distanceTraveled"
                      value={formData.distanceTraveled}
                      onChange={handleChange}
                      placeholder="Enter distance in km"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelFood">Travel/Food (€)</label>
                    <input
                      type="number"
                      id="travelFood"
                      name="travelFood"
                      value={formData.travelFood}
                      onChange={handleChange}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Tasks Performed</h3>
                <div className="form-group">
                  <label htmlFor="tasks">Tasks *</label>
                  <textarea
                    id="tasks"
                    name="tasks"
                    value={formData.tasks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows="4"
                    placeholder="Describe tasks performed"
                    className={getError('tasks') ? 'error' : ''}
                  />
                  {getError('tasks') && <span className="error-text">{getError('tasks')}</span>}
                </div>
              </div>

              <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pn">PN</label>
                    <input
                      type="text"
                      id="pn"
                      name="pn"
                      value={formData.pn}
                      onChange={handleChange}
                      placeholder="Enter part number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sn">SN</label>
                    <input
                      type="text"
                      id="sn"
                      name="sn"
                      value={formData.sn}
                      onChange={handleChange}
                      placeholder="Enter serial number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="trackingNumber">Tracking Number</label>
                  <input
                    type="text"
                    id="trackingNumber"
                    name="trackingNumber"
                    value={formData.trackingNumber}
                    onChange={handleChange}
                    placeholder="Enter tracking number"
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Submit Report'}
              </button>
              {status === 'success' && (
                <div className="success-message">Report submitted successfully!</div>
              )}
              {status === 'error' && (
                <div className="error-message">Failed to submit report. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Engineers
