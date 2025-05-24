import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCompanyById, updateCompany } from '../store/companiesSlice'
import Header from './Header'
import Navigation from './Navigation'

export default function EditCompany() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const company = useSelector(state => selectCompanyById(state, id))
  const [formData, setFormData] = useState(company || {})

  if (!company) return <div className="p-6">Компания не найдена</div>

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    dispatch(updateCompany({ ...formData, id }))
    navigate(`/view-company/${id}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold my-8">Редактор данных фирмы</h2>

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
                      value={formData[name] || ''}
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

      <div className="flex justify-center gap-4 mt-8">
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate(`/view-company/${id}`)}
        >
          &lt; Назад
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={handleSave}
        >
          Сохранить
        </button>
      </div>
    </div>
  )
}
