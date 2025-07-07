import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { href: 'hero', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'education', label: 'Education' },
    { href: 'experience', label: 'Experience' },
    { href: 'certifications', label: 'Certifications' },
    { href: 'publications', label: 'Publications' },
    { href: 'skills', label: 'Skills' },
    { href: 'languages', label: 'Languages' },
    { href: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Scrollspy logic
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.href)
        if (!el) return { href: link.href, top: Infinity }
        const rect = el.getBoundingClientRect()
        return { href: link.href, top: Math.abs(rect.top - 80) } // 80px offset for navbar height
      })
      const min = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveSection(min.href)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Desktop Navigation */}
          <div className="flex items-center w-full">
            <div className="hidden lg:flex items-center gap-1 xl:gap-4 2xl:gap-6 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className={`relative px-3 py-2 font-medium group whitespace-nowrap transition-all duration-300 ${
                    activeSection === link.href
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                  tabIndex={0}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transition-all duration-300 ${activeSection === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                  <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full ${activeSection === link.href ? 'w-full left-0' : 'group-hover:w-full group-hover:left-0'}`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-white hover:text-blue-300 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation"
            tabIndex={0}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-none p-8 border-b border-white/20 shadow-2xl w-full max-w-full mt-16" onClick={e => e.stopPropagation()}>
            <div className="space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); setIsMobileMenuOpen(false); }}
                  className={`block text-base font-medium py-4 px-6 rounded-xl border border-transparent transition-all duration-200 whitespace-nowrap ${
                    activeSection === link.href
                      ? 'text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 font-bold' 
                      : 'text-white/80 hover:text-white hover:bg-white/5 hover:border-white/10'
                  }`}
                  tabIndex={0}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation 