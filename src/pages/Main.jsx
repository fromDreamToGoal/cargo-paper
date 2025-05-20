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
        <button className="bg-lime-800/70 w-80 h-24 rounded mb-12 text-xl font-medium hover:bg-gray-300 transition" onClick={() => handleNav('/create')}>
          Создать документ
        </button>
        <div className="flex gap-12">
          <button className="bg-lime-800/70 w-40 h-40 rounded text-lg font-normal hover:bg-gray-300 transition" onClick={() => handleNav('/drivers')}>
            водители
          </button>
          <button className="bg-lime-800/70 w-40 h-40 rounded text-lg font-normal hover:bg-gray-300 transition" onClick={() => handleNav('/companies')}>
            фирмы
          </button>
          <button className="bg-lime-800/70 w-40 h-40 rounded text-lg font-normal hover:bg-gray-300 transition" onClick={() => handleNav('/templates')}>
            шаблоны
          </button>
        </div>
      </main>
    </div>
  )
}