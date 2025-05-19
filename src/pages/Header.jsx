import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

export default function Header({ onMenuClick }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleExit = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className="flex items-center justify-between w-full px-8 py-6 bg-cyan-400/10 shadow">
      <button
        onClick={onMenuClick}
        className="w-12 h-12 flex flex-col justify-center items-center bg-gray-200 border border-black shadow hover:bg-gray-300 transition"
      >
        <span className="block w-8 h-0.5 bg-black mb-2"></span>
        <span className="block w-8 h-0.5 bg-black mb-2"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
      </button>
      <h1 className="text-4xl font-light text-center flex-1">Cargo Paper</h1>
      <button
        onClick={handleExit}
        className="bg-gray-200 px-6 py-2 ml-4 rounded-sm text-lg hover:bg-red-600 transition"
      >
        Exit
      </button>
    </header>
  )
}