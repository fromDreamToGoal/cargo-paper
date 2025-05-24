import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Companies() {
  const navigate = useNavigate()
  const companies = useSelector(state => state.companies.companies)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6 mt-6">Фирмы</h2>

        <ul className="space-y-4 mb-10 p-10">
          {companies.map(company => (
            <li
              key={company.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
                <span className="text-lg">{company.name}</span>
              </div>
              <button
                className="text-gray-600 hover:text-black text-xl"
                title="Посмотреть"
                onClick={() => navigate(`/view-company/${company.id}`)}
              >
                👁
              </button>
            </li>
          ))}
        </ul>

        <button
          className="block mx-auto px-6 py-3 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => navigate('/add-company')}
        >
          Добавить фирму +
        </button>
      </main>
    </div>
  )
}