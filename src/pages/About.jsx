import React from 'react'
import { Award, Target, Eye, Heart } from 'lucide-react'
import './About.css'

const About = () => {
  const directors = [
    {
      name: 'Sekh Fakiruddin',
      position: 'Managing Director',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 5 years in construction industry, Sekh leads our company with vision and expertise in delivering world-class construction projects.'
    },
    {
      name: 'MD Abdullah Tayab',
      position: 'Managing Director',
      image:
        'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Abdullah oversees all operational aspects ensuring projects are delivered on time and exceed client expectations with her 5+ years of experience.'
    },
    {
      name: 'SK Lackuddin',
      position: 'Managing Director',
      image:
        'https://images.pexels.com/photos/2182212/pexels-photo-2182212.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'SK brings innovative engineering solutions and technical expertise to every project, ensuring the highest standards of construction quality.'
    }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering superior quality that exceeds expectations.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail and precision in execution ensures perfect results every time.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We bring innovative vision to traditional construction, creating spaces that inspire.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent processes, and ethical business practices guide everything we do.'
    }
  ]

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container center-text">
          <h1 className="title">About Umay Construction</h1>
          <p className="subtitle">
            Building trust, delivering excellence, and creating lasting relationships through superior construction services since 2010.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-story">
        <div className="container grid two-column">
          <div className="text-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2010, Umay Construction and Solutions began as a small family business with a big vision: to revolutionize the construction industry through innovation, quality, and unwavering commitment to client satisfaction.
            </p>
            <p>
              Over the past 15 years, we have grown into one of the region's most trusted construction companies, completing over 250 projects ranging from luxury residential homes to large-scale commercial and industrial facilities.
            </p>
            <p>
              Our success is built on a foundation of skilled craftmanship, cutting-edge technology, and a team of dedicated professionals who share our passion for building excellence.
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team"
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <div className="container">
          <div className="section-heading center-text">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="subtitle">
              Meet the experienced professionals who guide our company's vision and ensure every project exceeds expectations.
            </p>
          </div>

          <div className="grid three-column">
            {directors.map((director, index) => (
              <div key={index} className="card center-text">
                <div className="profile-img">
                  <img src={director.image} alt={director.name} />
                </div>
                <h3 className="card-title">{director.name}</h3>
                <p className="card-subtitle">{director.position}</p>
                <p className="card-text">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-heading center-text">
            <h2 className="section-title">Our Core Values</h2>
            <p className="subtitle">
              These fundamental principles guide our work and define who we are as a construction company.
            </p>
          </div>

          <div className="grid four-column">
            {values.map((value, index) => (
              <div key={index} className="value-card center-text">
                <div className="icon-wrapper">
                  <value.icon className="icon" />
                </div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="container grid two-column white-text">
          <div>
            <h3 className="section-title">Our Mission</h3>
            <p>
              To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
            </p>
            <p>
              We are committed to building lasting relationships and contributing to the growth of our communities.
            </p>
          </div>
          <div>
            <h3 className="section-title">Our Vision</h3>
            <p>
              To be the leading construction company in the region, recognized for innovation, sustainability, and excellence in every project we undertake.
            </p>
            <p>
              We envision a future where our constructions not only meet today's needs but also contribute to a better tomorrow.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
