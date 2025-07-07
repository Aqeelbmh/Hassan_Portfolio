import React from 'react'

const Skills = () => {
  const skillsData = {
    accounting: [
      { name: "Financial Accounting", level: 95 },
      { name: "Managerial Accounting", level: 90 },
      { name: "Cost Accounting", level: 85 },
      { name: "Tax Accounting", level: 88 },
      { name: "Audit Procedures", level: 85 },
      { name: "Financial Statements", level: 92 }
    ],
    technical: [
      { name: "Microsoft Excel", level: 95 },
      { name: "QuickBooks", level: 85 },
      { name: "SAP ERP", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "SQL Database", level: 70 },
      { name: "Tableau", level: 75 }
    ],
    analysis: [
      { name: "Financial Analysis", level: 90 },
      { name: "Budget Planning", level: 88 },
      { name: "Risk Assessment", level: 85 },
      { name: "Cost-Benefit Analysis", level: 82 },
      { name: "Ratio Analysis", level: 90 },
      { name: "Forecasting", level: 80 }
    ]
  }

  const SkillCard = ({ title, icon, skills, colorClass, description }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/90 font-medium text-sm">{skill.name}</span>
              <span className="text-white/70 text-xs">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full transition-all duration-1000 ${colorClass}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Skills
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive expertise in accounting, financial analysis, and business intelligence
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <SkillCard
              title="Accounting & Finance"
              icon="📊"
              skills={skillsData.accounting}
              colorClass="bg-gradient-to-r from-blue-500 to-blue-600"
              description="Core accounting principles and financial management"
            />
            
            <SkillCard
              title="Technical Tools"
              icon="💻"
              skills={skillsData.technical}
              colorClass="bg-gradient-to-r from-purple-500 to-purple-600"
              description="Software and technology proficiency"
            />
            
            <SkillCard
              title="Financial Analysis"
              icon="📈"
              skills={skillsData.analysis}
              colorClass="bg-gradient-to-r from-green-500 to-green-600"
              description="Data analysis and business intelligence"
            />
          </div>
          
          {/* Additional Professional Attributes */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Professional Attributes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Attention to Detail", icon: "🔍" },
                { name: "Analytical Thinking", icon: "🧠" },
                { name: "Problem Solving", icon: "💡" },
                { name: "Time Management", icon: "⏰" },
                { name: "Communication", icon: "💬" },
                { name: "Team Collaboration", icon: "🤝" },
                { name: "Ethical Standards", icon: "⚖️" },
                { name: "Continuous Learning", icon: "📚" }
              ].map((attr, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                  <span className="text-xl">{attr.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{attr.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 