import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Main() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  const handleNav = (path) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#F5F5F5]"
      style={{
        backgroundImage: 'url(src/assets/background2.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex flex-col items-center w-full max-w-7xl px-4 py-8">
        <button
          className="w-80 h-24 mb-12 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md text-gray-800 text-xl font-semibold hover:bg-white hover:shadow-lg transition duration-300"
          onClick={() => handleNav('/create')}
        >
          Создать документ
        </button>
        <div className="flex gap-12">
          <button
            className="w-40 h-40 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow text-gray-700 text-lg font-normal hover:bg-white hover:shadow-md transition duration-300"
            onClick={() => handleNav('/drivers')}
          >
            водители
          </button>
          <button
            className="w-40 h-40 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow text-gray-700 text-lg font-normal hover:bg-white hover:shadow-md transition duration-300"
            onClick={() => handleNav('/companies')}
          >
            фирмы
          </button>
          <button
            className="w-40 h-40 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow text-gray-700 text-lg font-normal hover:bg-white hover:shadow-md transition duration-300"
            onClick={() => handleNav('/templates')}
          >
            шаблоны
          </button>
        </div>
      </main>
    </div>
  )
}