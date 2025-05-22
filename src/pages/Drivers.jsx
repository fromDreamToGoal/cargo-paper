import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Drivers() {
  const navigate = useNavigate()
  const drivers = useSelector(state => state.drivers.drivers)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleAdd = () => {
    navigate('/add-driver')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <Header onMenuClick={() => setMenuOpen(true)} />
        <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Водители</h2>

        <ul className="space-y-4 mb-10">
          {drivers.map(driver => (
            <li
              key={driver.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
                <span className="text-lg">{driver.fullName}</span>
              </div>
              <button
                className="text-gray-600 hover:text-black text-xl"
                title="Посмотреть"
                onClick={() => navigate(`/view-driver/${driver.id}`)}
              >
                👁
              </button>
            </li>
          ))}
        </ul>

        <button
          className="block mx-auto px-6 py-3 bg-gray-300 rounded hover:bg-gray-400"
          onClick={handleAdd}
        >
          Добавить водителя +
        </button>
      </main>
    </div>
  )
}