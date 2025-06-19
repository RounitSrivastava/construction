import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobVacancies');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      const defaultJobs = [
        {
          id: '1',
          title: 'Senior Project Manager',
          department: 'Project Management',
          location: 'Downtown Office',
          type: 'Full-time',
          salary: '$80,000 - $100,000',
          experience: '5+ years',
          description:
            'Lead construction projects from planning to completion. Manage teams, budgets, and timelines while ensuring quality standards.',
          requirements: [
            "Bachelor's degree in Construction Management or related field",
            '5+ years of project management experience',
            'PMP certification preferred',
            'Strong leadership and communication skills'
          ],
          posted: '2024-01-15'
        },
        {
          id: '2',
          title: 'Site Engineer',
          department: 'Engineering',
          location: 'Various Sites',
          type: 'Full-time',
          salary: '$60,000 - $75,000',
          experience: '3+ years',
          description:
            'Oversee construction activities on-site, ensure compliance with specifications, and coordinate with various teams.',
          requirements: [
            "Bachelor's degree in Civil Engineering",
            '3+ years of site engineering experience',
            'Knowledge of construction methods and materials',
            'Strong problem-solving skills'
          ],
          posted: '2024-01-10'
        },
        {
          id: '3',
          title: 'Construction Foreman',
          department: 'Construction',
          location: 'Multiple Sites',
          type: 'Full-time',
          salary: '$55,000 - $70,000',
          experience: '7+ years',
          description:
            'Supervise construction crews, ensure safety protocols, and maintain quality standards on construction sites.',
          requirements: [
            'High school diploma or equivalent',
            '7+ years of construction experience',
            'Leadership and supervisory skills',
            'OSHA certification preferred'
          ],
          posted: '2024-01-08'
        }
      ];
      setJobs(defaultJobs);
      localStorage.setItem('jobVacancies', JSON.stringify(defaultJobs));
    }
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages with performance bonuses'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous training programs and certification support'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative workplace with experienced professionals'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear advancement paths and leadership opportunities'
    }
  ];

  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="careers-hero-pattern"></div>
        <div className="careers-hero-content">
          <h1>Build Your Career With Us</h1>
          <p>
            Join our team of construction professionals and help build the future. We offer
            excellent opportunities for growth and development in the construction industry.
          </p>
        </div>
      </section>

      <section className="section-content careers-why">
        <h2>Why Choose Umay Construction?</h2>
        <p>
          We're not just building structures; we're building careers. Join a company that values
          innovation, safety, and professional growth.
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="icon-wrapper">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-content careers-jobs">
        <h2>Current Openings</h2>
        <p>
          Explore our available positions and find the perfect opportunity to advance your
          construction career.
        </p>

        {jobs.length === 0 ? (
          <div className="no-openings">
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3>No Current Openings</h3>
            <p>Check back soon for new opportunities!</p>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.department}</p>
                </div>
                <Link to={`/apply/${job.id}`} className="apply-btn">
                  Apply Now
                </Link>
              </div>
              <div className="job-details">
                <div>
                  <MapPin className="icon" /> {job.location}
                </div>
                <div>
                  <Clock className="icon" /> {job.type}
                </div>
                <div>
                  <DollarSign className="icon" /> {job.salary}
                </div>
                <div>
                  <GraduationCap className="icon" /> {job.experience}
                </div>
              </div>
              <p>{job.description}</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h4>Requirements:</h4>
                  <ul style={{ textAlign: 'left' }}>
                    {job.requirements.map((req, index) => (
                      <li key={index}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      <section className="section-content careers-culture">
        <div className="culture-grid">
          <div>
            <h2>Our Company Culture</h2>
            <p>
              At Umay Construction, we believe that great projects are built by great teams. Our
              culture is founded on collaboration, innovation, and a shared commitment to
              excellence in everything we do.
            </p>
            <ul>
              <li>Safety-first approach in all our operations</li>
              <li>Continuous learning and professional development</li>
              <li>Recognition and rewards for outstanding performance</li>
              <li>Work-life balance and flexible arrangements</li>
              <li>Diverse and inclusive workplace environment</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
