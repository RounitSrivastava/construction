import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { HardHat } from 'lucide-react'; // No longer needed if using custom logo
import { Linkedin } from 'lucide-react'; // LinkedIn icon from lucide-react if available
// If Lucide-React doesn't have Linkedin, you can use react-icons:
// import { FaLinkedin } from 'react-icons/fa';

import umayLogo from '../assets/umay-logo.jpg'; // ✅ Import your company logo
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Admin', href: '/admin' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Company Logo Link */}
        <Link to="/" className="navbar-logo">
          <img src={umayLogo} alt="Umay Engineering Solutions Logo" className="company-logo" />
          <span className="navbar-brand">Umay Engineering Solutions Pvt Ltd</span>
          {/* You might keep the brand text or remove it if the logo is descriptive enough */}
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
          {/* LinkedIn Icon with Link */}
          <li>
            <a
              href="https://www.linkedin.com/company/umay-engineering-solutions-pvt-ltd" // Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link linkedin-link" // Add a specific class for styling
              onClick={() => setMenuOpen(false)} // Close menu on link click
              title="Visit our LinkedIn"
            >
              <Linkedin size={24} /> {/* Using Lucide-React's Linkedin icon */}
              {/* If using react-icons: <FaLinkedin size={24} /> */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;