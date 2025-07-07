import React from 'react'

const Languages = () => {
  const languagesData = {
    native: [
      { name: "Tajik", flag: "https://flagcdn.com/tj.svg", level: "Native" },
      { name: "Persian", flag: "https://flagcdn.com/ir.svg", level: "Native" }
    ],
    advanced: [
      { name: "Russian", flag: "https://flagcdn.com/ru.svg", level: "Excellent" },
      { name: "English", flag: "https://flagcdn.com/gb.svg", level: "Upper-Intermediate" }
    ],
    intermediate: [
      { name: "Indonesian", flag: "https://flagcdn.com/id.svg", level: "Intermediate" }
    ]
  }

  const LanguageCard = ({ title, icon, languages, colorClass }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={lang.flag} 
                alt={lang.name} 
                className="w-4 h-4 rounded-full object-cover"
              />
              <span className="text-white/90">{lang.name}</span>
            </div>
            <span className={`text-sm font-medium ${colorClass.replace('bg-', 'text-')}`}>
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Languages
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <LanguageCard
              title="Native Languages"
              icon="🌍"
              languages={languagesData.native}
              colorClass="bg-blue-500/10 text-blue-400"
            />
            
            <LanguageCard
              title="Advanced Languages"
              icon="🌐"
              languages={languagesData.advanced}
              colorClass="bg-purple-500/10 text-purple-400"
            />
            
            <LanguageCard
              title="Intermediate Languages"
              icon="🗣️"
              languages={languagesData.intermediate}
              colorClass="bg-cyan-500/10 text-cyan-400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages 