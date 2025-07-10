// Data service for managing portfolio data
import certificationsData from '../data/certifications.json'
import experienceData from '../data/experience.json'
import publicationsData from '../data/publications.json'
import localStorageService from './localStorageService'
import languagesData from '../data/languages.json'
import skillsData from '../data/skills.json'

class DataService {
  constructor() {
    // Load data from localStorage if available, otherwise use default JSON data
    this.certifications = this.loadData('certifications', certificationsData.certifications || [])
    this.experience = this.loadData('experience', experienceData.experience || [])
    this.publications = this.loadData('publications', publicationsData.publications || [])
    this.languages = this.loadData('languages', languagesData.languages || [])
    this.skills = this.loadData('skills', skillsData.skills || [])
    this.skillAttributes = skillsData.attributes || []
  }

  // Load data from localStorage or use default
  loadData(type, defaultData) {
    const storedData = localStorageService.loadData(type)
    return storedData || defaultData
  }

  // Get all certifications, optionally filtered by category
  getCertifications(category = null) {
    let filtered = this.certifications.sort((a, b) => a.priority - b.priority)
    
    if (category) {
      filtered = filtered.filter(cert => cert.category === category)
    }
    
    return filtered
  }

  // Get all experience, optionally filtered by category
  getExperience(category = null) {
    let filtered = this.experience.sort((a, b) => a.priority - b.priority)
    
    if (category) {
      filtered = filtered.filter(exp => exp.category === category)
    }
    
    return filtered
  }

  // Get all publications, optionally filtered by category
  getPublications(category = null) {
    let filtered = this.publications.sort((a, b) => a.priority - b.priority)
    
    if (category) {
      filtered = filtered.filter(pub => pub.category === category)
    }
    
    return filtered
  }

  // Get certification categories
  getCertificationCategories() {
    const categories = [...new Set(this.certifications.map(cert => cert.category))]
    return categories.filter(category => category) // Remove empty categories
  }

  // Get experience categories
  getExperienceCategories() {
    const categories = [...new Set(this.experience.map(exp => exp.category))]
    return categories.filter(category => category) // Remove empty categories
  }

  // Get publication categories
  getPublicationCategories() {
    const categories = [...new Set(this.publications.map(pub => pub.category))]
    return categories.filter(category => category) // Remove empty categories
  }

  // Search certifications
  searchCertifications(query) {
    const searchTerm = query.toLowerCase()
    return this.certifications.filter(cert => 
      cert.title.toLowerCase().includes(searchTerm) ||
      cert.issuer.toLowerCase().includes(searchTerm) ||
      cert.description.toLowerCase().includes(searchTerm)
    )
  }

  // Search experience
  searchExperience(query) {
    const searchTerm = query.toLowerCase()
    return this.experience.filter(exp => 
      exp.position.toLowerCase().includes(searchTerm) ||
      exp.company.toLowerCase().includes(searchTerm) ||
      exp.description.some(desc => desc.toLowerCase().includes(searchTerm))
    )
  }

  // Search publications
  searchPublications(query) {
    const searchTerm = query.toLowerCase()
    return this.publications.filter(pub => 
      pub.title.toLowerCase().includes(searchTerm) ||
      pub.publisher.toLowerCase().includes(searchTerm) ||
      pub.description.toLowerCase().includes(searchTerm)
    )
  }

  // Get recent items (last 5 by priority)
  getRecentCertifications(limit = 5) {
    return this.certifications
      .sort((a, b) => a.priority - b.priority)
      .slice(0, limit)
  }

  getRecentExperience(limit = 5) {
    return this.experience
      .sort((a, b) => a.priority - b.priority)
      .slice(0, limit)
  }

  getRecentPublications(limit = 5) {
    return this.publications
      .sort((a, b) => a.priority - b.priority)
      .slice(0, limit)
  }

  // Get statistics
  getStats() {
    return {
      totalCertifications: this.certifications.length,
      totalExperience: this.experience.length,
      totalPublications: this.publications.length,
      certificationCategories: this.getCertificationCategories().length,
      experienceCategories: this.getExperienceCategories().length,
      publicationCategories: this.getPublicationCategories().length
    }
  }

  // CRUD Operations for Certifications
  addCertification(certification) {
    const newCert = { ...certification, id: certification.id || Date.now().toString() }
    this.certifications.push(newCert)
    localStorageService.saveData('certifications', this.certifications)
    return newCert
  }

  updateCertification(id, updates) {
    const index = this.certifications.findIndex(cert => cert.id === id)
    if (index !== -1) {
      this.certifications[index] = { ...this.certifications[index], ...updates }
      localStorageService.saveData('certifications', this.certifications)
      return this.certifications[index]
    }
    return null
  }

  deleteCertification(id) {
    const index = this.certifications.findIndex(cert => cert.id === id)
    if (index !== -1) {
      this.certifications.splice(index, 1)
      localStorageService.saveData('certifications', this.certifications)
      return true
    }
    return false
  }

  // CRUD Operations for Experience
  addExperience(experience) {
    const newExp = { ...experience, id: experience.id || Date.now().toString() }
    this.experience.push(newExp)
    localStorageService.saveData('experience', this.experience)
    return newExp
  }

  updateExperience(id, updates) {
    const index = this.experience.findIndex(exp => exp.id === id)
    if (index !== -1) {
      this.experience[index] = { ...this.experience[index], ...updates }
      localStorageService.saveData('experience', this.experience)
      return this.experience[index]
    }
    return null
  }

  deleteExperience(id) {
    const index = this.experience.findIndex(exp => exp.id === id)
    if (index !== -1) {
      this.experience.splice(index, 1)
      localStorageService.saveData('experience', this.experience)
      return true
    }
    return false
  }

  // CRUD Operations for Publications
  addPublication(publication) {
    const newPub = { ...publication, id: publication.id || Date.now().toString() }
    this.publications.push(newPub)
    localStorageService.saveData('publications', this.publications)
    return newPub
  }

  updatePublication(id, updates) {
    const index = this.publications.findIndex(pub => pub.id === id)
    if (index !== -1) {
      this.publications[index] = { ...this.publications[index], ...updates }
      localStorageService.saveData('publications', this.publications)
      return this.publications[index]
    }
    return null
  }

  deletePublication(id) {
    const index = this.publications.findIndex(pub => pub.id === id)
    if (index !== -1) {
      this.publications.splice(index, 1)
      localStorageService.saveData('publications', this.publications)
      return true
    }
    return false
  }

  // LANGUAGES CRUD & UTILS
  getLanguages(group = null) {
    let filtered = [...this.languages]
    if (group) filtered = filtered.filter(lang => lang.group === group)
    return filtered
  }
  getLanguageGroups() {
    return [...new Set(this.languages.map(lang => lang.group))]
  }
  addLanguage(language) {
    const newLang = { ...language, id: language.id || Date.now().toString() }
    this.languages.push(newLang)
    localStorageService.saveData('languages', this.languages)
    return newLang
  }
  updateLanguage(id, updates) {
    const idx = this.languages.findIndex(lang => lang.id === id)
    if (idx !== -1) {
      this.languages[idx] = { ...this.languages[idx], ...updates }
      localStorageService.saveData('languages', this.languages)
      return this.languages[idx]
    }
    return null
  }
  deleteLanguage(id) {
    const idx = this.languages.findIndex(lang => lang.id === id)
    if (idx !== -1) {
      this.languages.splice(idx, 1)
      localStorageService.saveData('languages', this.languages)
      return true
    }
    return false
  }

  // SKILLS CRUD & UTILS
  getSkills(category = null) {
    let filtered = [...this.skills]
    if (category) filtered = filtered.filter(skill => skill.category === category)
    return filtered
  }
  getSkillCategories() {
    return [...new Set(this.skills.map(skill => skill.category))]
  }
  getSkillAttributes() {
    return this.skillAttributes
  }
  addSkill(skill) {
    const newSkill = { ...skill, id: skill.id || Date.now().toString() }
    this.skills.push(newSkill)
    localStorageService.saveData('skills', this.skills)
    return newSkill
  }
  updateSkill(id, updates) {
    const idx = this.skills.findIndex(skill => skill.id === id)
    if (idx !== -1) {
      this.skills[idx] = { ...this.skills[idx], ...updates }
      localStorageService.saveData('skills', this.skills)
      return this.skills[idx]
    }
    return null
  }
  deleteSkill(id) {
    const idx = this.skills.findIndex(skill => skill.id === id)
    if (idx !== -1) {
      this.skills.splice(idx, 1)
      localStorageService.saveData('skills', this.skills)
      return true
    }
    return false
  }

  // Export all data
  exportAllData() {
    return localStorageService.exportData()
  }

  // Import data
  importData(data) {
    if (data.certifications) {
      this.certifications = data.certifications
      localStorageService.saveData('certifications', this.certifications)
    }
    if (data.experience) {
      this.experience = data.experience
      localStorageService.saveData('experience', this.experience)
    }
    if (data.publications) {
      this.publications = data.publications
      localStorageService.saveData('publications', this.publications)
    }
  }

  // Reset to default data
  resetToDefault() {
    this.certifications = certificationsData.certifications || []
    this.experience = experienceData.experience || []
    this.publications = publicationsData.publications || []
    
    localStorageService.clearAllData()
  }
}

// Create and export a singleton instance
const dataService = new DataService()
export default dataService 