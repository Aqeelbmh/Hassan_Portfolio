import React, { useState } from 'react'

const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'admin123'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      localStorage.setItem('admin_logged_in', 'true')
      setError('')
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Admin Login</h2>
        <p className="text-center text-gray-500 mb-4">Enter your admin credentials to access the panel.</p>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter admin username"
            autoFocus
            autoComplete="username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login 