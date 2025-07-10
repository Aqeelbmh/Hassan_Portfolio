// Local storage service for persisting data changes
class LocalStorageService {
  constructor() {
    this.storageKeys = {
      certifications: 'portfolio_certifications',
      experience: 'portfolio_experience',
      publications: 'portfolio_publications'
    }
  }

  // Save data to localStorage
  saveData(type, data) {
    try {
      localStorage.setItem(this.storageKeys[type], JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Error saving data to localStorage:', error)
      return false
    }
  }

  // Load data from localStorage
  loadData(type) {
    try {
      const data = localStorage.getItem(this.storageKeys[type])
      return data ? JSON.parse(data) : null
    } catch (error) {
      console.error('Error loading data from localStorage:', error)
      return null
    }
  }

  // Check if data exists in localStorage
  hasData(type) {
    return localStorage.getItem(this.storageKeys[type]) !== null
  }

  // Clear all portfolio data
  clearAllData() {
    Object.values(this.storageKeys).forEach(key => {
      localStorage.removeItem(key)
    })
  }

  // Export all data as JSON
  exportData() {
    const data = {}
    Object.keys(this.storageKeys).forEach(type => {
      data[type] = this.loadData(type)
    })
    return data
  }

  // Import data from JSON
  importData(data) {
    try {
      Object.keys(this.storageKeys).forEach(type => {
        if (data[type]) {
          this.saveData(type, data[type])
        }
      })
      return true
    } catch (error) {
      console.error('Error importing data:', error)
      return false
    }
  }
}

const localStorageService = new LocalStorageService()
export default localStorageService 