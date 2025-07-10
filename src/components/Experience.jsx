import React, { useState, useEffect } from 'react'
import dataService from '../services/dataService'

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Load experience data
    let data = dataService.getExperience(selectedCategory === 'all' ? null : selectedCategory)
    
    // Apply search filter if query exists
    if (searchQuery) {
      data = dataService.searchExperience(searchQuery)
    }
    
    setExperienceData(data)
  }, [selectedCategory, searchQuery])

  const categories = dataService.getExperienceCategories()

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional experience across banking, logistics, and community development
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <input
            type="text"
            placeholder="Search experience..."
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
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <div key={item.id || index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        💼
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-sm">
                          {item.duration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {item.company}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{item.location}</span>
                      </div>

                      {/* Category Badge */}
                      {item.category && (
                        <div>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                            {item.category}
                          </span>
                        </div>
                      )}
                      
                      {/* Description */}
                      <div className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/80 leading-relaxed text-sm">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No results message */}
        {experienceData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">
              {searchQuery 
                ? `No experience found matching "${searchQuery}"`
                : 'No experience found for the selected category.'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience 