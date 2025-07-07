import React from 'react'

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '2+', icon: '📈' },
    { label: 'Certifications', value: '17', icon: '🏆' },
    { label: 'Languages', value: '4', icon: '🌍' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 backdrop-blur-sm">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src="My poto.jpg" 
                      alt="Hasan Rabiev" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Available for Opportunities
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  Professional Summary
                </h3>
                
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  I am an ambitious and detail-oriented Accounting student with a strong interest in financial analysis, auditing, and tax planning. I have developed a solid foundation in accounting principles and enjoy working with numbers, solving problems, and ensuring accuracy in financial reporting.
                </p>
                
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  Proficient in Microsoft Excel and familiar with accounting software, I am eager to apply my knowledge in real-world settings. I value integrity, organization, and continuous learning. My goal is to become a certified accountant and contribute to the financial success of businesses through ethical and efficient accounting practices.
                </p>
                
                {/* Key Attributes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {['Detail-oriented', 'Analytical Thinker', 'Problem Solver', 'Continuous Learner'].map((attribute, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                      <span className="text-white/80 text-sm font-medium">{attribute}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics Section */}
          <div className="flex justify-center w-full mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-w-[220px]">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 