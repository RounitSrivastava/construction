import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react'
import './Home.css'

const Home = () => {
  const stats = [
    { label: 'Projects Completed', value: '250+', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'On Time Delivery', value: '98%', icon: Clock },
  ]

  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes and residential complexes built to perfection',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Commercial Buildings',
      description: 'Office buildings, retail spaces, and commercial complexes',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Industrial Projects',
      description: 'Warehouses, factories, and industrial facilities',
      image: 'https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Building Your <span>Dreams Into Reality</span></h1>
          <p>With over 15 years of experience, Umay Construction delivers exceptional construction services with unmatched quality and reliability.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn secondary">
              Get Free Quote <ArrowRight className="icon" />
            </Link>
            <Link to="/projects" className="btn primary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((stat, i) => (
          <div key={i} className="stat">
            <div className="stat-icon">{<stat.icon size={32} />}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="services">
        <h2>Our Construction Services</h2>
        <p className="sub">From residential homes to commercial complexes, we provide comprehensive construction solutions tailored to your needs.</p>
        <div className="service-list">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.image} alt={s.title} className="service-img" />
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link to="/services" className="learn-more">
                  Learn More <ArrowRight className="icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="center">
          <Link to="/services" className="btn primary">View All Services</Link>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Construction Project?</h2>
        <p>Contact us today for a free consultation and let us help you bring your vision to life with our expert construction services.</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn secondary">Get Free Consultation</Link>
          <Link to="/careers" className="btn primary">Join Our Team</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
