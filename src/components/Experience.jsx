import React from 'react'

const Experience = () => {
  const experienceData = [
    {
      position: 'Junior Specialist in Remote Service Center',
      company: 'OJSC "ALIF BANK"',
      location: 'Tajikistan, Dushanbe',
      duration: 'January 2022 – April 2022',
      description: [
        'Provided customer support through remote channels, addressing inquiries and resolving issues efficiently',
        'Assisted in onboarding clients to digital banking services',
        'Maintained client records in compliance with company standards',
        'Supported senior specialists in handling complex cases',
        'Gained foundational knowledge of remote banking operations'
      ]
    },
    {
      position: 'Specialist in Remote Service Center',
      company: 'OJSC "ALIF BANK"',
      location: 'Tajikistan, Dushanbe',
      duration: 'April 2022 – August 2022',
      description: [
        'Handled advanced customer service tasks and complex inquiries',
        'Enhanced service quality through customer feedback analysis',
        'Collaborated with cross-functional teams to optimize processes',
        'Trained and mentored junior specialists',
        'Troubleshot system issues for improved efficiency'
      ]
    },
    {
      position: 'Customer Service Volunteer',
      company: 'OJSC "ALIF BANK"',
      location: 'Tajikistan, Dushanbe',
      duration: 'December 2022 (15 days)',
      description: [
        'Assisted customers with inquiries and provided effective solutions',
        'Developed communication skills through diverse client interactions',
        'Gained experience in customer service and request management'
      ]
    },
    {
      position: 'Auto Credit Consultant Volunteer',
      company: 'OJSC "ALIF BANK"',
      location: 'Tajikistan, Dushanbe',
      duration: 'December 2022 (15 days)',
      description: [
        'Supported customers with auto credit service applications',
        'Guided clients through loan application processes',
        'Reviewed credit applications and provided financial advice'
      ]
    },
    {
      position: 'Inbound Logistics',
      company: 'KKN Unsika',
      location: 'Indonesia',
      duration: 'June 26 – August 5, 2024',
      description: [
        'Managed resource distribution and logistics for program activities',
        'Coordinated food and supplies for participants and community',
        'Enhanced teamwork and organizational skills'
      ]
    },
    {
      position: 'Service Learning Program Participant',
      company: 'SULAM (Service Learning Malaysia - University for Society)',
      location: 'Indonesia',
      duration: 'May 30 - June 2, 2023',
      description: [
        'Collaborated on community-based economic projects',
        'Applied theoretical knowledge to real-world scenarios',
        'Fostered cross-cultural communication and teamwork',
        'Conducted economic assessments and proposed solutions'
      ]
    },
    {
      position: 'Service Learning Program Participant',
      company: 'SULAM (Service Learning Malaysia - University for Society)',
      location: 'Malaysia',
      duration: 'May 16 - May 25, 2024',
      description: [
        'Engaged in community empowerment through economic strategies',
        'Coordinated with local stakeholders on impactful projects',
        'Enhanced problem-solving skills in multicultural environments',
        'Presented findings and recommendations to leaders'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional experience across banking, logistics, and community development
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <div key={index} className="group">
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
      </div>
    </section>
  )
}

export default Experience 