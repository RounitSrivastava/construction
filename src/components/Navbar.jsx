import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HardHat } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' }, // ✅ New link added here
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Admin', href: '/admin' },

  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <HardHat className="navbar-icon" />
          <span className="navbar-brand">Umay Construction</span>
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`navbar-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
