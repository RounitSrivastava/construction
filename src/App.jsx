// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Gallery from './pages/Gallery' // ✅ Correct import
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Admin from './pages/Admin'
import JobApplication from './pages/JobApplication'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/apply/:jobId" element={<JobApplication />} />
          <Route path="/gallery" element={<Gallery />} /> {/* ✅ Route added */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
