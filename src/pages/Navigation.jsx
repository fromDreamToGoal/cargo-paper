import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

export default function Navigation({ open, onClose }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNav = (path) => {
    navigate(path)
    onClose()
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 bg-black/30 flex"
      onClick={onClose}
    >
      <nav
        className="bg-white/30 w-72 h-[calc(100%-96px)] mt-24 p-8 flex flex-col gap-4 shadow-xl"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => handleNav('/main')}>Главная</button>
        <button className="text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => handleNav('/create')}>Создать документ</button>
        <button className="text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => handleNav('/drivers')}>Водители</button>
        <button className="text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => handleNav('/companies')}>Фирмы</button>
        <button className="text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition" onClick={() => handleNav('/templates')}>Шаблоны</button>
        <button className="text-left px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition mt-8" onClick={handleLogout}>Выход</button>
      </nav>
    </div>
  )
}