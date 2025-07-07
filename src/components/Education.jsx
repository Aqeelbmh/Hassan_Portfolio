import React from 'react'

const Education = () => {
  const educationData = [
    {
      title: 'Bachelor degree in Accounting',
      institution: 'University of Singaperbangsa Karawang',
      year: '2021 - Present',
      link: 'https://www.linkedin.com/school/universitas-singaperbangsa-karawang/',
      description: 'Accounting, Finance, and Management',

    },
    {
      title: 'Economic lyceum for gifted students',
      institution: 'High School Diploma',
      year: '2016 - 2021',
      link: 'https://www.linkedin.com/school/economic-lyceum-for-gifted-students-in-dushanbe/',
      description: 'General Education',

    },
    {
      title: 'Lyceum Rahnamo',
      institution: 'High School Diploma',
      year: '2010 - 2016',
      link: 'https://g.co/kgs/5CkX3Bt',
      description: 'General Education',

    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Academic background and educational achievements
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                                             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                         🎓
                       </div>
                       <div className="text-right">
                         <div className="text-white/60 text-sm">
                           {item.year}
                         </div>
                       </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-300 font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {item.institution}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{item.year}</span>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="pt-4 border-t border-white/10">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium group/link"
                        >
                          <span>View Institution</span>
                          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Education 