import React, { useState } from 'react'
import { MapPin, Clock, Users } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'residential',
      status: 'completed',
      location: 'Downtown District',
      duration: '18 months',
      team: '25 people',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern 50-unit luxury apartment complex with premium amenities and sustainable design features.'
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      category: 'commercial',
      status: 'ongoing',
      location: 'Business Park',
      duration: '24 months',
      team: '45 people',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '15-story corporate headquarters with modern glass facade and smart building technologies.'
    },
    {
      id: 3,
      title: 'Manufacturing Facility',
      category: 'industrial',
      status: 'ongoing',
      location: 'Industrial Zone',
      duration: '12 months',
      team: '30 people',
      image: 'https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing plant with automated systems and environmental controls.'
    },
    {
      id: 4,
      title: 'Shopping Mall Renovation',
      category: 'commercial',
      status: 'completed',
      location: 'City Center',
      duration: '8 months',
      team: '20 people',
      image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete renovation of existing shopping mall with modern design and improved customer experience.'
    },
    {
      id: 5,
      title: 'Residential Villa Project',
      category: 'residential',
      status: 'ongoing',
      location: 'Suburban Hills',
      duration: '10 months',
      team: '15 people',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom luxury villa with contemporary architecture and premium interior finishes.'
    },
    {
      id: 6,
      title: 'Warehouse Distribution Center',
      category: 'industrial',
      status: 'completed',
      location: 'Logistics Hub',
      duration: '14 months',
      team: '35 people',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale distribution center with advanced logistics systems and energy-efficient design.'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'completed', label: 'Completed' }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    return project.category === activeFilter || project.status === activeFilter
  })

  return (
    <div id="projects">
      {/* Title + Filter Section */}
      <section className="project-header">
        <h1>Our Construction Projects</h1>
        <p>
          Explore our portfolio of successful construction projects spanning residential,
          commercial, and industrial sectors.
        </p>
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`project-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards */}
      <section className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="relative">
              <img src={project.image} alt={project.title} className="project-img" />
              <span className={`project-status ${project.status}`}>
                {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
              </span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-meta">
                <div><MapPin /> {project.location}</div>
                <div><Clock /> {project.duration}</div>
                <div><Users /> {project.team}</div>
              </div>
              <span className={`project-tag ${project.category}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects
