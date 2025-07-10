import React, { useState, useEffect } from 'react'
import dataService from '../services/dataService'

const Certifications = () => {
  const [certificationsData, setCertificationsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Load certifications data
    let data = dataService.getCertifications(selectedCategory === 'all' ? null : selectedCategory)
    
    // Apply search filter if query exists
    if (searchQuery) {
      data = dataService.searchCertifications(searchQuery)
    }
    
    setCertificationsData(data)
  }, [selectedCategory, searchQuery])

  const categories = dataService.getCertificationCategories()

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Certifications & Achievements
        </h2>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <input
            type="text"
            placeholder="Search certifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div key={cert.id || index} className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl shadow-lg flex-shrink-0">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-300 text-sm font-medium">
                      {cert.issuer || 'Issuer not specified'}
                    </p>
                  </div>
                </div>
                
                {/* Category Badge */}
                {cert.category && (
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {cert.category}
                    </span>
                  </div>
                )}
                
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/70 text-sm">
                    {cert.date || cert.year || 'Date not specified'}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                {/* View Certificate Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    if (cert.link) {
                      window.open(cert.link, '_blank', 'noopener,noreferrer')
                    }
                  }}
                >
                  <span>View Certificate</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* No results message */}
        {certificationsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">
              {searchQuery 
                ? `No certifications found matching "${searchQuery}"`
                : 'No certifications found for the selected category.'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications 