import React from 'react'

const Certifications = () => {
  const certificationsData = [
    {
      title: 'Kangaroo Math Competition',
      issuer: 'Kangaroo Math',
      year: '2019',
      date: '14.04.2019',
      description: 'Certificate for the successful completion of Kangaroo Math competition',
      link: 'https://drive.google.com/file/d/1p_Q2xyk81H-8Lpks-R1hlDu6vGXcsXnd/view?usp=sharing'
    },
    {
      title: '6th International English Language Competition',
      issuer: 'HIPPO 2018 English Without Borders',
      year: '2018',
      date: '2018',
      description: 'Certificate for the participation in the Preliminary Round',
      link: 'https://drive.google.com/file/d/1FJ2ILJIQFAvQoH5r9klxORb_ZY1LhA8l/view?usp=sharing'
    },
    {
      title: 'Microsoft Excel Mastery for Finance Webinar',
      issuer: 'Smart Path',
      year: '2024',
      date: '2024',
      description: 'Certificate for participation in Microsoft Excel Mastery for Finance Webinar',
      link: 'https://drive.google.com/file/d/1IVnuq2yWoP3KfsA2C4jXJvXETdtAXfOX/view?usp=sharing'
    },
    {
      title: 'ISFL23 Participation: Enriching International Security',
      issuer: 'UNSIKA, Faculty of Law',
      year: '2023',
      date: '18th December 2023',
      description: 'Certificate for participation in International Seminar Faculty of Law',
      link: 'https://drive.google.com/file/d/1mAKqsjRLY9vB0WbKjqjroLUyNh6Gfj9z/view?usp=drive_link'
    },
    {
      title: 'MINI BIPA: Popular Culture in Indonesia Certificate',
      issuer: 'Faculty of Humanities, Universitas Diponegoro',
      year: '2023',
      date: '03rd Augest 2024',
      description: 'Certificate for participation in MINI BIPA: Popular Culture in Indonesia, Online Summer Course Program',
      link: 'https://drive.google.com/file/d/1cACGCv94ANbQmGndbtoXQlSXJ0Cf-H09/view?usp=sharing'
    },
    {
      title: 'Certificate of Appreciation: Guest Speaker at 2nd FSS Special Edition',
      issuer: 'ULCC',
      year: '2022',
      date: '27th November 2022',
      description: 'Certificate of Appreciation for being a guest speaker at the 2nd FSS Special Edition',
      link: 'https://drive.google.com/file/d/1h3VLHYx6ioeCGh5bSP6fMNTd5th6wg9q/view?usp=sharing'
    },
    {
      title: 'Most Impactful Recommendations Award Inbound Logistics Teams',
      issuer: 'Universiti Teknologi Mara',
      year: '',
      date: '',
      description: 'Certificate for the Most Impactful Recommendations Award Inbound Logistics Teams',
      link: 'https://drive.google.com/file/d/1ep-9Zg32lt_BMjJTuuc8c63mtVeRD4Da/view?usp=sharing'
    },
    {
      title: 'UITM - UNSIKA International SULAM Program Participant',
      issuer: 'UITM and UNSIKA',
      year: '2023',
      date: 'May - July 2023',
      description: 'Certificate for the UITM - UNSIKA International SULAM Program Participant',
      link: 'https://drive.google.com/file/d/1nZe-uHLZyl8w6b7Z2UB4OfrEJQP3YZLL/view?usp=sharing'
    },
    {
      title: 'Singaperbangsa English Proficiency Test(SEP-T) S1 Level',
      issuer: 'UPA Bahasa, Universitas Singaperbangsa Karawang',
      year: '2024',
      date: '10th November 2024',
      description: 'Certificate for the Singaperbangsa English Proficiency Test(SEP-T) S1 Level',
      link: 'https://drive.google.com/file/d/1HjekFmC-rYtr2O-daSCyq8VxuNdQ61_v/view?usp=sharing'
    },
    {
      title: 'Interational BIPA Seminar 2024 - Organizing Committee',
      issuer: 'FKIP UNSIKA',
      year: '2024',
      date: '15th November 2024',
      description: 'Certificate for the Interational BIPA Seminar 2024 - Organizing Committee',
      link: 'https://drive.google.com/file/d/1tFHcyxI8hviMC0QsUBEN1HLb5ypP8DoK/view?usp=sharing'
    },
    {
      title: 'Innovation and Technology Festival 2024',
      issuer: 'LPPM, Universitas Singaperbangsa Karawang',
      year: '2024',
      date: '16th - 17th November 2024',
      description: 'Certificate for the Innovation and Technology Festival 2024',
      link: 'https://drive.google.com/file/d/1OUYcbIQirP-JkCNrAuDoq6a-Jf2XX0KE/view?usp=sharing'
    },
    {
      title: 'Certificate of Participation, Penyuluhan dan Bimbingan Kerja Tahun 2024',
      issuer: 'Universitas Singaperbangsa Karawang',
      year: '2024',
      date: '22th - 26th July 2024',
      description: 'Certificate for the participation in the Penyuluhan dan Bimbingan Kerja Tahun 2024',
      link: 'https://drive.google.com/file/d/1hOS14_R3Cvz5nzflH8SgOx5cPzcILFkc/view?usp=sharing'
    },
    {
      title: 'Heads Up, Buddies Voyage',
      issuer: '(SMF) Student Sekretarist of the Faculty of Accountancy, Universiti Teknologi Mara',
      year: '2023/2024',
      date: '21st - 25th May 2024',
      description: 'Certificate for the participation in the Heads Up, Buddies Voyage',
      link: 'https://drive.google.com/file/d/16ztgzU7ZxfV699NDEvL8aS17vBrLl6pG/view?usp=sharing'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte',
      year: '2025',
      date: '08th April 2025',
      description: 'Certificate for the Completion of Data Analytics Job Simulation',
      link: 'https://drive.google.com/file/d/1NZ-N-3yHbmuCiZFwGEOsJvBrVx__ISoZ/view?usp=sharing'
    },
    {
      title: 'Debate Cources Participation',
      issuer: '',
      year: '2019',
      date: 'July 08th - August 19th 2019',
      description: 'Certificate for the participation in the Debate Cources',
      link: 'https://drive.google.com/file/d/169dzHIj2W9txxPYYRV_swVbLZaIxf57Q/view?usp=sharing'
    },
    {
      title: 'Webinar: Strengthening Cybersecurity in the Cyber World',
      issuer: 'Nusa Putra University',
      year: '2024',
      date: '27th July 2024',
      description: 'Certificate for the participation in the Webinar: Strengthening Cybersecurity in the Cyber World',
      link: 'https://drive.google.com/file/d/18t6RXdFDVXaeoofkRL2eTVAQ3yy73Q4P/view?usp=sharing'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div key={index} className="group">
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
      </div>
    </section>
  )
}

export default Certifications 