// Contact.jsx
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      setTimeout(() => setSubmitStatus(''), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['123 Construction Avenue', 'Building City, BC 12345', 'United States']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Toll Free: 1-800-UMAY-BUILD']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@umayconstruction.com', 'projects@umayconstruction.com', 'careers@umayconstruction.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ]

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Ready to start your construction project? Get in touch with our expert team for a free consultation and personalized quote.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitStatus === 'success' && <div className="success-message">Thank you! We'll reply in 24 hours.</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Construction</option>
                <option value="industrial">Industrial Projects</option>
                <option value="renovation">Renovation & Remodeling</option>
                <option value="interior">Interior Design</option>
                <option value="mep">MEP Services</option>
              </select>
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Project Details *" required />
            <button type="submit" disabled={isSubmitting} className="send-btn">
              {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          {contactInfo.map((info, i) => (
            <div className="info-block" key={i}>
              <div className="icon-wrapper">
                <info.icon size={24} />
              </div>
              <div>
                <h3>{info.title}</h3>
                {info.details.map((d, j) => <p key={j}>{d}</p>)}
              </div>
            </div>
          ))}

          <div className="emergency-block">
            <h3>Emergency Construction Services</h3>
            <p>Call our 24/7 hotline:</p>
            <strong>+1 (555) 911-BUILD</strong>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <h2>Visit Our Office</h2>
        <div className="map-placeholder">
          <MapPin size={64} />
          <p>123 Construction Avenue, Building City, BC 12345</p>
        </div>
      </section>

      <section className="contact-cta">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>Contact our expert construction team today and let's turn your vision into reality.</p>
        <div className="cta-buttons">
          <button className="secondary-btn">Schedule Free Consultation</button>
          <button className="primary-btn">Get Instant Quote</button>
        </div>
      </section>
    </div>
  )
}

export default Contact
