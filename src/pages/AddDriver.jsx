import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDriver } from '../store/driversSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function AddDriver() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    inn: '',
    ogrnip: '',
    registrationAddress: '',
    phone: '',
    car: '',
    carNumber: '',
    trailerNumber: '',
    taxSystem: '',
    email: '',
    okved: '',
    kpp: '',
    bankName: '',
    bik: '',
    kor: '',
    ras: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    const newDriver = { id: uuidv4(), ...formData }
    dispatch(addDriver(newDriver))
    navigate('/drivers')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">CargoPaper</h1>
        <h2 className="text-xl font-medium">Добавить водителя</h2>
      </header>

      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
        className="bg-white p-6 rounded shadow max-w-4xl mx-auto space-y-4"
      >
        {[
          ['ФИО', 'fullName'],
          ['ИНН', 'inn'],
          ['ОГРНИП', 'ogrnip'],
          ['Адрес регистрации', 'registrationAddress'],
          ['Телефон', 'phone'],
          ['Автомобиль', 'car'],
          ['Номер автомобиля', 'carNumber'],
          ['Номер прицепа', 'trailerNumber'],
          ['Система налогообложения', 'taxSystem'],
          ['Электронная почта', 'email'],
          ['ОКВЭД', 'okved'],
          ['КПП', 'kpp'],
          ['Наименование банка', 'bankName'],
          ['БИК', 'bik'],
          ['кор/сч', 'kor'],
          ['р/сч', 'ras']
        ].map(([label, name]) => (
          <div key={name} className="flex flex-col">
            <label className="font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Добавить +
        </button>
      </form>
    </div>
  )
}