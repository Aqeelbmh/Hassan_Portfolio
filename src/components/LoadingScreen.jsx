import React, { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <h2 className="text-2xl font-semibold text-white">Loading Portfolio</h2>
          <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen 