import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ username }))
  }

  return (
    <div
      className="fixed inset-0 flex items-end justify-center min-h-screen"
      style={{
        backgroundImage: 'url(src/assets/background1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover', // изменено с cover на contain
        backgroundColor: '#f3f4f6', // fallback цвет
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50/80 p-4 rounded-t-lg shadow-md w-full max-w-xs h-auto mb-2"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">Вход</h2>

        <label className="block mb-2 text-center">Логин</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 text-center"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block mb-2 text-center">Пароль</label>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-6 text-center"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
        >
          Вход
        </button>
      </form>
    </div>
  )
}