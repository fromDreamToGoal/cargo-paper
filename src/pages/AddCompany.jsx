import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCompany } from '../store/companiesSlice'
import Header from './Header'
import Navigation from './Navigation'
import { nanoid } from '@reduxjs/toolkit'

export default function AddCompany() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    director: '',
    directorPhone: '',
    accountantPhone: '',
    email: '',
    address: '',
    bankName: '',
    ogrn: '',
    okpo: '',
    okved: '',
    inn: '',
    kpp: '',
    bik: '',
    rs: '',
    ks: '',
    taxSystem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAdd = () => {
    dispatch(addCompany({ ...formData, id: nanoid() }))
    navigate('/companies')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold my-8">Добавить фирму</h2>

      <div className="flex justify-center">
        <div className="max-w-5xl min-w-3xl bg-white shadow p-6">
          <table className="w-full border border-black text-left text-sm">
            <tbody>
              {[
                ['Название', 'name'],
                ['Генеральный директор', 'director'],
                ['Телефон директора', 'directorPhone'],
                ['Телефон бухгалтера', 'accountantPhone'],
                ['Электронный адрес', 'email'],
                ['Адрес', 'address'],
                ['Название банка', 'bankName'],
                ['ОГРН', 'ogrn'],
                ['ОКПО', 'okpo'],
                ['ОКВЭД', 'okved'],
                ['ИНН', 'inn'],
                ['КПП', 'kpp'],
                ['БИК', 'bik'],
                ['р/с', 'rs'],
                ['к/с', 'ks'],
                ['Система налогообложения', 'taxSystem']
              ].map(([label, name]) => (
                <tr key={name} className="border border-black">
                  <td className="border px-2 py-1 font-semibold w-1/3">{label}</td>
                  <td className="border px-2 py-1">
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-gray-300 px-6 py-2 mb-8 rounded hover:bg-gray-400"
          onClick={handleAdd}
        >
          Добавить +
        </button>
      </div>
    </div>
  )
}
