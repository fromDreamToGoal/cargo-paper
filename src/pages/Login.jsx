import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === '1234') {
      dispatch(login({ username }))
      setError('')
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-end justify-center min-h-screen"
      style={{
        backgroundImage: 'url(src/assets/background1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#f3f4f6',
      }}
    >
      <h1 className="fixed top-10 text-4xl font-light text-center mb-4">
        Cargo Paper
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50/80 p-4 rounded-t-lg shadow-md w-full max-w-xs h-auto mb-2"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Вход</h2>

        {error && (
          <div className="text-red-500 text-center mb-2">{error}</div>
        )}

        <label className="block mb-2 text-center"></label>
        <input
          type="text"
          className="w-full p-2 border border-gray-700 rounded mb-4 text-center"
          value={username}
          placeholder='Введите логин'
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block mb-2 text-center"></label>
        <input
          type="password"
          className="w-full p-2 border border-gray-700 rounded mb-6 text-center"
          value={password}
          placeholder='Пароль'
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