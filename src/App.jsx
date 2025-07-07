import React, { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Publications from './components/Publications'

function App() {
  useEffect(() => {
    // Initialize external scripts
    if (window.Typed) {
      new window.Typed('.typing-text', {
        strings: [
          'Aspiring Accountant & Financial Professional',
          'Detail-oriented & Analytical Thinker',
          'Passionate about Financial Analysis',
          'Committed to Professional Excellence'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      })
    }

    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      })
    }

    // Load external scripts
    const loadScript = (src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.head.appendChild(script)
    }

    if (!window.Typed) {
      loadScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.12')
    }
    if (!window.particlesJS) {
      loadScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js')
    }
  }, [])

  return (
    <div className="App">
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Publications />
      <Skills />
      <Languages />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 