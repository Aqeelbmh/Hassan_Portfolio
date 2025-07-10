import React, { useState, useEffect } from 'react'
import dataService from '../services/dataService'
import { FaPlus, FaTrash, FaEdit, FaGlobe, FaLanguage, FaStar } from 'react-icons/fa'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('certifications')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [formData, setFormData] = useState({})

  // Get data based on active tab
  const getData = () => {
    let data = []
    let categories = []
    
    switch (activeTab) {
      case 'certifications':
        data = selectedCategory === 'all' 
          ? dataService.getCertifications()
          : dataService.getCertifications(selectedCategory)
        categories = dataService.getCertificationCategories()
        break
      case 'experience':
        data = selectedCategory === 'all'
          ? dataService.getExperience()
          : dataService.getExperience(selectedCategory)
        categories = dataService.getExperienceCategories()
        break
      case 'publications':
        data = selectedCategory === 'all'
          ? dataService.getPublications()
          : dataService.getPublications(selectedCategory)
        categories = dataService.getPublicationCategories()
        break
      default:
        break
    }

    // Apply search filter
    if (searchQuery) {
      switch (activeTab) {
        case 'certifications':
          data = dataService.searchCertifications(searchQuery)
          break
        case 'experience':
          data = dataService.searchExperience(searchQuery)
          break
        case 'publications':
          data = dataService.searchPublications(searchQuery)
          break
        default:
          break
      }
    }

    return { data, categories }
  }

  const { data, categories } = getData()
  const stats = dataService.getStats()

  // Initialize form data based on active tab
  useEffect(() => {
    if (showAddForm || editingItem) {
      const initialData = {
        id: editingItem?.id || '',
        title: editingItem?.title || '',
        issuer: editingItem?.issuer || '',
        company: editingItem?.company || '',
        publisher: editingItem?.publisher || '',
        year: editingItem?.year || '',
        date: editingItem?.date || '',
        description: editingItem?.description || '',
        link: editingItem?.link || '',
        category: editingItem?.category || '',
        priority: editingItem?.priority || 1,
        location: editingItem?.location || '',
        duration: editingItem?.duration || '',
        authors: editingItem?.authors || [],
        type: editingItem?.type || ''
      }
      setFormData(initialData)
    }
  }, [showAddForm, editingItem, activeTab])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      if (editingItem) {
        // Update existing item
        switch (activeTab) {
          case 'certifications':
            dataService.updateCertification(editingItem.id, formData)
            break
          case 'experience':
            dataService.updateExperience(editingItem.id, formData)
            break
          case 'publications':
            dataService.updatePublication(editingItem.id, formData)
            break
          default:
            break
        }
      } else {
        // Add new item
        switch (activeTab) {
          case 'certifications':
            dataService.addCertification(formData)
            break
          case 'experience':
            dataService.addExperience(formData)
            break
          case 'publications':
            dataService.addPublication(formData)
            break
          default:
            break
        }
      }
      
      setShowAddForm(false)
      setEditingItem(null)
      setFormData({})
      
      // Force re-render by updating the component state
      window.location.reload()
    } catch (error) {
      console.error('Error saving data:', error)
      alert('Error saving data. Please try again.')
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setShowAddForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        let success = false
        switch (activeTab) {
          case 'certifications':
            success = dataService.deleteCertification(id)
            break
          case 'experience':
            success = dataService.deleteExperience(id)
            break
          case 'publications':
            success = dataService.deletePublication(id)
            break
          default:
            break
        }
        
        if (success) {
          // Force re-render by updating the component state
          window.location.reload()
        } else {
          alert('Error deleting item. Please try again.')
        }
      } catch (error) {
        console.error('Error deleting item:', error)
        alert('Error deleting item. Please try again.')
      }
    }
  }

  const renderForm = () => {
    const isEditing = !!editingItem
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">
              {isEditing ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}
            </h3>
            <button
              onClick={() => {
                setShowAddForm(false)
                setEditingItem(null)
                setFormData({})
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* CERTIFICATIONS FORM */}
            {activeTab === 'certifications' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                    <span className="text-xs text-gray-500">Enter the title of the certification, e.g. "Kangaroo Math Competition".</span>
                    <input id="title" type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full p-2 border rounded" required placeholder="e.g. Kangaroo Math Competition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <span className="text-xs text-gray-500">Enter the category of the certification, e.g. "academic", "professional", "language".</span>
                    <input id="category" type="text" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. academic, professional, language" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="issuer">Issuer</label>
                    <span className="text-xs text-gray-500">Enter the organization or institution that issued the certification, e.g. "Kangaroo Math".</span>
                    <input id="issuer" type="text" value={formData.issuer || ''} onChange={(e) => setFormData({...formData, issuer: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. Kangaroo Math" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="year">Year</label>
                    <span className="text-xs text-gray-500">Enter the year of the certification, e.g. "2024".</span>
                    <input id="year" type="text" value={formData.year || ''} onChange={(e) => setFormData({...formData, year: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. 2024" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
                  <span className="text-xs text-gray-500">Enter the specific date of the certification, e.g. "15th January 2024".</span>
                  <input id="date" type="text" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. 15th January 2024" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                  <span className="text-xs text-gray-500">Enter a brief description of the certification.</span>
                  <textarea id="description" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-2 border rounded h-20" required placeholder="Enter a brief description..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="link">Link</label>
                  <span className="text-xs text-gray-500">Enter the URL where the certification can be verified, e.g. "https://example.com/certificate".</span>
                  <input id="link" type="url" value={formData.link || ''} onChange={(e) => setFormData({...formData, link: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. https://example.com/certificate" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="priority">Priority</label>
                    <span className="text-xs text-gray-500">Enter a priority level (lower number means higher priority), e.g. "1".</span>
                    <input id="priority" type="number" value={formData.priority || 1} onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})} className="w-full p-2 border rounded" min="1" placeholder="e.g. 1 (lower = higher)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
                    <span className="text-xs text-gray-500">Leave blank to auto-generate.</span>
                    <input id="id" type="text" value={formData.id || ''} onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" placeholder="Leave blank for auto-generated" />
                  </div>
                </div>
              </>
            )}

            {/* EXPERIENCE FORM */}
            {activeTab === 'experience' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="position">Position</label>
                    <span className="text-xs text-gray-500">Enter the job title or position, e.g. "Junior Specialist".</span>
                    <input id="position" type="text" value={formData.position || ''} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full p-2 border rounded" required placeholder="e.g. Junior Specialist" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <span className="text-xs text-gray-500">Enter the industry or field of the experience, e.g. "banking", "logistics", "community".</span>
                    <input id="category" type="text" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. banking, logistics, community" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
                    <span className="text-xs text-gray-500">Enter the name of the company or organization, e.g. "OJSC 'ALIF BANK'".</span>
                    <input id="company" type="text" value={formData.company || ''} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. OJSC 'ALIF BANK'" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
                    <span className="text-xs text-gray-500">Enter the city or country of the experience, e.g. "Tajikistan, Dushanbe".</span>
                    <input id="location" type="text" value={formData.location || ''} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. Tajikistan, Dushanbe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="duration">Duration</label>
                  <span className="text-xs text-gray-500">Enter the start and end dates of the experience, e.g. "January 2022 – April 2022".</span>
                  <input id="duration" type="text" value={formData.duration || ''} onChange={(e) => setFormData({...formData, duration: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. January 2022 – April 2022" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">Description (one per line)</label>
                  <span className="text-xs text-gray-500">Enter each responsibility or achievement on a new line.</span>
                  <textarea id="description" value={Array.isArray(formData.description) ? formData.description.join('\n') : formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value.split('\n')})} className="w-full p-2 border rounded h-20" required placeholder="Enter each responsibility on a new line..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="priority">Priority</label>
                    <span className="text-xs text-gray-500">Enter a priority level (lower number means higher priority), e.g. "1".</span>
                    <input id="priority" type="number" value={formData.priority || 1} onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})} className="w-full p-2 border rounded" min="1" placeholder="e.g. 1 (lower = higher)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
                    <span className="text-xs text-gray-500">Leave blank to auto-generate.</span>
                    <input id="id" type="text" value={formData.id || ''} onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" placeholder="Leave blank for auto-generated" />
                  </div>
                </div>
              </>
            )}

            {/* PUBLICATIONS FORM */}
            {activeTab === 'publications' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                    <span className="text-xs text-gray-500">Enter the title of the publication, e.g. "Exploring the Use of ChatGPT...".</span>
                    <input id="title" type="text" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full p-2 border rounded" required placeholder="e.g. Exploring the Use of ChatGPT..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <span className="text-xs text-gray-500">Enter the category of the publication, e.g. "research", "article", "conference".</span>
                    <input id="category" type="text" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. research, article, conference" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="publisher">Publisher</label>
                    <span className="text-xs text-gray-500">Enter the publisher or organization of the publication, e.g. "ResearchGate".</span>
                    <input id="publisher" type="text" value={formData.publisher || ''} onChange={(e) => setFormData({...formData, publisher: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. ResearchGate" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="year">Year</label>
                    <span className="text-xs text-gray-500">Enter the year of the publication, e.g. "2024".</span>
                    <input id="year" type="text" value={formData.year || ''} onChange={(e) => setFormData({...formData, year: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. 2024" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="authors">Authors (comma separated)</label>
                  <span className="text-xs text-gray-500">Enter the authors of the publication, separated by commas, e.g. "Hassan, John Doe".</span>
                  <input id="authors" type="text" value={formData.authors ? formData.authors.join(', ') : ''} onChange={(e) => setFormData({...formData, authors: e.target.value.split(',').map(a => a.trim())})} className="w-full p-2 border rounded" placeholder="e.g. Hassan, John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="type">Type</label>
                  <span className="text-xs text-gray-500">Enter the type of the publication, e.g. "journal_article", "conference_paper".</span>
                  <input id="type" type="text" value={formData.type || ''} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. journal_article, conference_paper" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                  <span className="text-xs text-gray-500">Enter a brief description of the publication.</span>
                  <textarea id="description" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-2 border rounded h-20" required placeholder="Enter a brief description..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="link">Link</label>
                  <span className="text-xs text-gray-500">Enter the URL where the publication can be accessed, e.g. "https://example.com/publication".</span>
                  <input id="link" type="url" value={formData.link || ''} onChange={(e) => setFormData({...formData, link: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. https://example.com/publication" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="priority">Priority</label>
                    <span className="text-xs text-gray-500">Enter a priority level (lower number means higher priority), e.g. "1".</span>
                    <input id="priority" type="number" value={formData.priority || 1} onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})} className="w-full p-2 border rounded" min="1" placeholder="e.g. 1 (lower = higher)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
                    <span className="text-xs text-gray-500">Leave blank to auto-generate.</span>
                    <input id="id" type="text" value={formData.id || ''} onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" placeholder="Leave blank for auto-generated" />
                  </div>
                </div>
              </>
            )}

            {/* LANGUAGES FORM */}
            {activeTab === 'languages' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Language Name</label>
                    <span className="text-xs text-gray-500">Enter the full name of the language, e.g. "English".</span>
                    <input id="name" type="text" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded" required placeholder="e.g. English" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="flag">Flag URL</label>
                    <span className="text-xs text-gray-500">Paste a direct link to a flag image, e.g. from flagcdn.com.</span>
                    <input id="flag" type="text" value={formData.flag || ''} onChange={(e) => setFormData({...formData, flag: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. https://flagcdn.com/gb.svg" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="level">Proficiency Level</label>
                    <span className="text-xs text-gray-500">e.g. "Native", "Excellent", "Intermediate".</span>
                    <input id="level" type="text" value={formData.level || ''} onChange={(e) => setFormData({...formData, level: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. Native, Excellent, Intermediate" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="group">Group</label>
                    <span className="text-xs text-gray-500">Choose the proficiency group for this language.</span>
                    <select id="group" value={formData.group || ''} onChange={(e) => setFormData({...formData, group: e.target.value})} className="w-full p-2 border rounded">
                      <option value="">Select group</option>
                      {languageGroupOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
                    <span className="text-xs text-gray-500">Leave blank to auto-generate.</span>
                    <input id="id" type="text" value={formData.id || ''} onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" placeholder="Leave blank for auto-generated" />
                  </div>
                </div>
              </>
            )}

            {/* SKILLS FORM */}
            {activeTab === 'skills' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Skill Name</label>
                    <span className="text-xs text-gray-500">Enter the name of the skill, e.g. "Financial Accounting".</span>
                    <input id="name" type="text" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded" required placeholder="e.g. Financial Accounting" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="level">Level (%)</label>
                    <span className="text-xs text-gray-500">Enter the proficiency level as a percentage, e.g. "95".</span>
                    <input id="level" type="number" value={formData.level || ''} onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})} className="w-full p-2 border rounded" min="0" max="100" placeholder="e.g. 95" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <span className="text-xs text-gray-500">Choose the category for this skill.</span>
                    <select id="category" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full p-2 border rounded">
                      <option value="">Select category</option>
                      {skillCategoryOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="id">ID</label>
                    <span className="text-xs text-gray-500">Leave blank to auto-generate.</span>
                    <input id="id" type="text" value={formData.id || ''} onChange={(e) => setFormData({...formData, id: e.target.value})} className="w-full p-2 border rounded" placeholder="Leave blank for auto-generated" />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false)
                  setEditingItem(null)
                  setFormData({})
                }}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const renderDataTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">
                {activeTab === 'certifications' ? 'Title' : 
                 activeTab === 'experience' ? 'Position' : 'Title'}
              </th>
              <th className="text-left p-2">
                {activeTab === 'certifications' ? 'Issuer' : 
                 activeTab === 'experience' ? 'Company' : 'Publisher'}
              </th>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Priority</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{item.id}</td>
                <td className="p-2 font-medium">{item.title || item.position}</td>
                <td className="p-2">{item.issuer || item.company || item.publisher}</td>
                <td className="p-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {item.category}
                  </span>
                </td>
                <td className="p-2">{item.priority}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const allTabs = [
    { key: 'certifications', label: 'Certifications', icon: <FaStar /> },
    { key: 'experience', label: 'Experience', icon: <FaGlobe /> },
    { key: 'publications', label: 'Publications', icon: <FaEdit /> },
    { key: 'languages', label: 'Languages', icon: <FaLanguage /> },
    { key: 'skills', label: 'Skills', icon: <FaPlus /> },
  ]

  // For Languages
  const languageGroups = dataService.getLanguageGroups()
  const languagesByGroup = languageGroups.map(group => ({
    group,
    languages: dataService.getLanguages(group)
  }))
  // For Skills
  const skillCategories = dataService.getSkillCategories()
  const skillsByCategory = skillCategories.map(cat => ({
    category: cat,
    skills: dataService.getSkills(cat)
  }))
  const skillAttributes = dataService.getSkillAttributes()

  const languageGroupOptions = [
    { value: 'native', label: 'Native' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'intermediate', label: 'Intermediate' }
  ]
  const skillCategoryOptions = [
    { value: 'accounting', label: 'Accounting & Finance' },
    { value: 'technical', label: 'Technical Tools' },
    { value: 'analysis', label: 'Financial Analysis' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Admin Panel</h1>
            <p className="text-gray-600">Manage your certifications, experience, and publications</p>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-4 justify-end">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalCertifications}</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.totalExperience}</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.totalPublications}</div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="flex border-b">
            {allTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-6 font-semibold text-base transition-all duration-200 border-b-2 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'border-blue-600 text-blue-700 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          {['certifications','experience','publications'].includes(activeTab) && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">
              <div className="flex gap-4 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                >
                  <FaPlus /> Add {activeTab.slice(0, -1)}
                </button>
                <button
                  onClick={() => {
                    const data = dataService.exportAllData()
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'portfolio-data.json'
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
                >
                  Export
                </button>
                <button
                  onClick={() => {
                    const input = document.createElement('input')
                    input.type = 'file'
                    input.accept = '.json'
                    input.onchange = (e) => {
                      const file = e.target.files[0]
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                          try {
                            const data = JSON.parse(e.target.result)
                            dataService.importData(data)
                            window.location.reload()
                          } catch (error) {
                            alert('Error importing data. Please check the file format.')
                          }
                        }
                        reader.readAsText(file)
                      }
                    }
                    input.click()
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 font-semibold"
                >
                  Import
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset to default data? This will clear all custom changes.')) {
                      dataService.resetToDefault()
                      window.location.reload()
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 font-semibold"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
          {activeTab === 'languages' && (
            <div className="flex justify-end p-6 border-b">
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              >
                <FaPlus /> Add language
              </button>
            </div>
          )}
          {activeTab === 'skills' && (
            <div className="flex justify-end p-6 border-b">
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              >
                <FaPlus /> Add skill
              </button>
            </div>
          )}

          {/* Data Table as Cards */}
          <div className="p-6">
            {['certifications','experience','publications'].includes(activeTab) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-lg text-gray-800 truncate">
                        {item.title || item.position}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 rounded-full hover:bg-blue-100 text-blue-600"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-full hover:bg-red-100 text-red-600"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      {activeTab === 'certifications' && item.issuer}
                      {activeTab === 'experience' && item.company}
                      {activeTab === 'publications' && item.publisher}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.category && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      )}
                      {item.year && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {item.year}
                        </span>
                      )}
                      {item.date && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {item.date}
                        </span>
                      )}
                      {item.duration && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-700 text-sm line-clamp-3 mb-2">
                      {item.description && (Array.isArray(item.description) ? item.description.join(' ') : item.description)}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs font-medium mt-auto"
                      >
                        View Link
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'languages' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languagesByGroup.map(({ group, languages }) => (
                  <div key={group} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="font-bold text-lg text-gray-800 mb-2 capitalize">{group} Languages</div>
                    {languages.map(lang => (
                      <div key={lang.id || lang.name} className="flex items-center justify-between gap-2 py-2 border-b last:border-b-0">
                        <div className="flex items-center gap-2">
                          <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full" />
                          <span className="text-gray-700 font-medium">{lang.name}</span>
                          <span className="text-xs text-gray-500">{lang.level}</span>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleEdit(lang)}
                            className="p-1 rounded-full hover:bg-blue-100 text-blue-600"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(lang.id)}
                            className="p-1 rounded-full hover:bg-red-100 text-red-600"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'skills' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {skillsByCategory.map(({ category, skills }) => (
                    <div key={category} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 border border-gray-100 hover:shadow-lg transition-all relative">
                      <div className="font-bold text-lg text-gray-800 mb-2 capitalize">{category} Skills</div>
                      {skills.map(skill => (
                        <div key={skill.id || skill.name} className="flex items-center justify-between gap-2 py-2 border-b last:border-b-0">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                            <span className="text-xs text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleEdit(skill)}
                              className="p-1 rounded-full hover:bg-blue-100 text-blue-600"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(skill.id)}
                              className="p-1 rounded-full hover:bg-red-100 text-red-600"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="font-bold text-lg text-gray-800 mb-2">Professional Attributes</div>
                  <div className="flex flex-wrap gap-3">
                    {skillAttributes.map(attr => (
                      <div key={attr.name} className="flex items-center gap-2 bg-white/50 rounded-lg px-3 py-2">
                        <span className="text-xl">{attr.icon}</span>
                        <span className="text-gray-700 text-sm font-medium">{attr.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showAddForm && renderForm()}
    </div>
  )
}

export default AdminPanel 