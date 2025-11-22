import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-red-300 to-purple-400 shadow-lg px-8 py-3 flex items-center justify-between w-full sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white">🎓</span>
        <span className="text-xl font-semibold text-white tracking-wide drop-shadow">Student Portal</span>
      </div>
      <div className="flex gap-6">
        <Link
          className="text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-amber-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          to="/registration"
        >
          Registration
        </Link>
      </div>
    </nav>
  )
}

export default Navbar