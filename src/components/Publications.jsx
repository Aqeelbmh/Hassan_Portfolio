import React from 'react'

const publicationsData = [
  {
    title: 'Exploring the Use of ChatGPT in Academic Assignments: Frequency, Benefits, and Perceptions among University Students',
    publisher: 'ResearchGate',
    year: '2024',
    description: 'This paper investigates how university students utilize ChatGPT for academic assignments, examining usage frequency, perceived benefits, and overall attitudes toward AI-assisted learning tools.',
    link: 'https://www.researchgate.net/publication/388735417_Exploring_the_Use_of_ChatGPT_in_Academic_Assignments_Frequency_Benefits_and_Perceptions_among_University_Students'
  }
]

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Publications
        </h2>
        <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Selected research papers, articles, and conference presentations in accounting and finance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {publicationsData.map((pub, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5 line-clamp-2">{pub.title}</h3>
                  <p className="text-blue-300 text-sm font-medium">{pub.publisher}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white/70 text-sm">{pub.year}</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4 flex-1">{pub.description}</p>
              {pub.link && pub.link !== '#' && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium mt-auto"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications 