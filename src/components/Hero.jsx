import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-slate-900/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hasan Rabiev
          </span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay font-medium tracking-wide">
          Certified <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Accounting Professional</span>
          <span className="mx-2 text-white/50">&amp;</span>
          <span className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Financial Analyst</span>
        </p>
        
        <div className="typing-text text-base sm:text-xl md:text-2xl text-blue-300 mb-12 h-8 animate-fade-in-delay-2"></div>
        
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          Specializing in financial analysis, tax planning, and audit procedures. 
          Dedicated to ensuring financial accuracy and driving business success through 
          ethical accounting practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Get in Touch
          </button>
          
          <a
            href="ATS CV_HASAN RABIEV_.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 mt-12 max-w-md mx-auto animate-fade-in-delay-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">3+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">17</div>
            <div className="text-white/70 text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">4</div>
            <div className="text-white/70 text-sm">Languages</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero 