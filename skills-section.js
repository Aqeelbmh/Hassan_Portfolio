import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactCountryFlag from "react-country-flag";

const technicalSkills = [
  { name: "Financial Analysis", level: 90 },
  { name: "Tax Planning", level: 85 },
  { name: "Auditing", level: 85 },
  { name: "Microsoft Excel", level: 95 },
  { name: "Accounting Software", level: 80 },
  { name: "Financial Reporting", level: 90 },
  { name: "Risk Management", level: 75 },
  { name: "Budgeting", level: 85 }
];

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 90 },
  { name: "Time Management", level: 85 },
  { name: "Adaptability", level: 80 },
  { name: "Attention to Detail", level: 95 },
  { name: "Critical Thinking", level: 85 },
  { name: "Leadership", level: 80 }
];

const professionalSkills = [
  { name: "Banking", level: 90 },
  { name: "Project Management", level: 85 },
  { name: "Quality Assurance", level: 80 },
  { name: "Customer Service", level: 85 },
  { name: "Data Analysis", level: 90 },
  { name: "Financial Modeling", level: 85 },
  { name: "ERP Systems", level: 80 },
  { name: "Business Intelligence", level: 75 }
];

const languages = {
  native: [
    { name: "Tajik", level: 100, status: "Native", countryCode: "TJ" },
    { name: "Persian", level: 100, status: "Native", countryCode: "IR" }
  ],
  advanced: [
    { name: "Russian", level: 90, status: "Excellent", countryCode: "RU" },
    { name: "English", level: 80, status: "Upper-Intermediate", countryCode: "GB" }
  ],
  intermediate: [
    { name: "Indonesian", level: 60, status: "Intermediate", countryCode: "ID" }
  ]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-dark-lighter section-padding">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Skill categories */}
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="glass-card w-full mb-6 p-1">
                <TabsTrigger 
                  value="technical"
                  className="flex-1 data-[state=active]:text-neon-blue data-[state=active]:shadow-none data-[state=active]:bg-white/5"
                >
                  Technical Skills
                </TabsTrigger>
                <TabsTrigger 
                  value="soft" 
                  className="flex-1 data-[state=active]:text-neon-blue data-[state=active]:shadow-none data-[state=active]:bg-white/5"
                >
                  Soft Skills
                </TabsTrigger>
                <TabsTrigger 
                  value="professional" 
                  className="flex-1 data-[state=active]:text-neon-blue data-[state=active]:shadow-none data-[state=active]:bg-white/5"
                >
                  Professional Tools
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="technical">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
                    <div className="space-y-5">
                      {technicalSkills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-neon-blue">{skill.level}%</span>
                          </div>
                          <div className="skill-progress">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-blue to-neon-purple neon-shadow"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="soft">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
                    <div className="space-y-5">
                      {softSkills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-neon-purple">{skill.level}%</span>
                          </div>
                          <div className="skill-progress">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-purple to-neon-pink neon-shadow-purple"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="professional">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6">Professional Tools</h3>
                    <div className="space-y-5">
                      {professionalSkills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-neon-cyan">{skill.level}%</span>
                          </div>
                          <div className="skill-progress">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-cyan to-neon-blue"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Languages */}
            <Card className="glass-card border-none h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Language Proficiency</h3>
                <div className="space-y-8">
                  {/* Native Languages */}
                  <div className="language-category">
                    <div className="language-header flex items-center gap-3 mb-4">
                      <i className="fas fa-language text-neon-blue"></i>
                      <h4 className="text-lg font-semibold text-white">Native Languages</h4>
                    </div>
                    <div className="space-y-4">
                      {languages.native.map((language, index) => (
                        <div key={index} className="language-item">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <ReactCountryFlag
                                countryCode={language.countryCode}
                                svg
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  objectFit: 'cover'
                                }}
                                title={language.name}
                              />
                              <span className="text-white font-medium">{language.name}</span>
                            </div>
                            <span className="text-neon-blue">{language.status}</span>
                          </div>
                          <div className="skill-progress h-3">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-blue to-neon-purple"
                              style={{ width: `${language.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Languages */}
                  <div className="language-category">
                    <div className="language-header flex items-center gap-3 mb-4">
                      <i className="fas fa-language text-neon-purple"></i>
                      <h4 className="text-lg font-semibold text-white">Advanced Languages</h4>
                    </div>
                    <div className="space-y-4">
                      {languages.advanced.map((language, index) => (
                        <div key={index} className="language-item">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <ReactCountryFlag
                                countryCode={language.countryCode}
                                svg
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  objectFit: 'cover'
                                }}
                                title={language.name}
                              />
                              <span className="text-white font-medium">{language.name}</span>
                            </div>
                            <span className="text-neon-purple">{language.status}</span>
                          </div>
                          <div className="skill-progress h-3">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-purple to-neon-pink"
                              style={{ width: `${language.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intermediate Languages */}
                  <div className="language-category">
                    <div className="language-header flex items-center gap-3 mb-4">
                      <i className="fas fa-language text-neon-cyan"></i>
                      <h4 className="text-lg font-semibold text-white">Intermediate Languages</h4>
                    </div>
                    <div className="space-y-4">
                      {languages.intermediate.map((language, index) => (
                        <div key={index} className="language-item">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <ReactCountryFlag
                                countryCode={language.countryCode}
                                svg
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  objectFit: 'cover'
                                }}
                                title={language.name}
                              />
                              <span className="text-white font-medium">{language.name}</span>
                            </div>
                            <span className="text-neon-cyan">{language.status}</span>
                          </div>
                          <div className="skill-progress h-3">
                            <div 
                              className="skill-bar bg-gradient-to-r from-neon-cyan to-neon-blue"
                              style={{ width: `${language.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-4">Additional Qualifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-neon-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h5 className="text-white font-medium">Financial Ethics</h5>
                        <p className="text-sm text-gray-400">Certified</p>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-neon-purple/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h5 className="text-white font-medium">Financial Research</h5>
                        <p className="text-sm text-gray-400">Advanced</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 