import React from "react";
import { Link } from "react-router-dom";
import {
  HardHat, MapPin, Phone, Mail,
  Facebook, Twitter, Linkedin, Instagram,
} from "lucide-react";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <HardHat className="footer-icon" />
              <span className="footer-title">Umay Construction</span>
            </div>
            <p className="footer-description">
              Building excellence since 2018. We specialize in residential, commercial, and industrial construction projects with a commitment to quality and innovation.
            </p>
            <div className="footer-socials">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Linkedin className="social-icon" />
              <Instagram className="social-icon" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>Mouza-Trijanga, Industrail Area Kalinga Nagar, Jajpur, Odisha, PIN Code: 755026</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>info@umayconstruction.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Umay Engineering Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
