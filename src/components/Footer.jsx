import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hasan-rabiev-20a554270/?profileId=ACoAAEJJ7SoBhYQnuGLbWEtR39arkjGPB08dsUk', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://www.instagram.com/hasan_rbv?igsh=a3ByNWJmdXNxbjI3', icon: 'instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1AHaVXqvVQ/', icon: 'facebook' },
    { name: 'Telegram', url: 'https://t.me/hasanrabiev', icon: 'telegram' },
    { name: 'WhatsApp', url: 'https://wa.me/qr/VNT5J2LCVTDXH1', icon: 'whatsapp' }
  ]

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Experience', href: 'experience' },
    { name: 'Certifications', href: 'certifications' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">HR</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Hasan Rabiev</h3>
                <p className="text-white/70 text-base">Certified Accounting Professional</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-base max-w-xs md:max-w-none">
              Dedicated accounting professional with expertise in financial analysis, 
              tax planning, and audit procedures. Committed to delivering accurate, 
              ethical, and strategic financial solutions.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-2 flex-wrap justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 border border-white/10 shadow-sm hover:shadow-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title={social.name}
                  tabIndex={0}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Portfolio Links */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 justify-center md:justify-start">
              <span className="inline-block w-1 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span>Portfolio</span>
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-base px-2 py-1 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  tabIndex={0}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 justify-center md:justify-start">
              <span className="inline-block w-1 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
              <span>Contact</span>
            </h4>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/70 text-base">Jakarta, Indonesia</span>
              </div>
              <a 
                href="mailto:hasanrabiev123@gmail.com" 
                className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors group justify-center md:justify-start"
                tabIndex={0}
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform text-base">hasanrabiev123@gmail.com</span>
              </a>
              <a 
                href="tel:+992900016225" 
                className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors group justify-center md:justify-start"
                tabIndex={0}
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform text-base">+992 900 016 225</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/70 text-sm">
            &copy; 2025 H.K – Freelance Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="/Privacy Policy_h.k.pdf" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" tabIndex={0}>
              Privacy Policy
            </a>
            <a href="/Terms of Service_hk.pdf" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" tabIndex={0}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 