import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectDriverById, updateDriver } from '../store/driversSlice'
import Header from './Header'
import Navigation from './Navigation'

export default function EditDriver() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const driver = useSelector(state => selectDriverById(state, id))
  const [formData, setFormData] = useState(driver || {})

  if (!driver) return <div className="p-6">Водитель не найден</div>

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    dispatch(updateDriver({ ...formData, id }))
    navigate(`/view-driver/${id}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold my-8">
        Редактор данных водителя
      </h2>

      <div className="flex justify-center">
        <div className="max-w-5xl min-w-3xl bg-white shadow p-6">
          <table className="w-full border border-black text-left text-sm">
            <tbody>
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

      <div className="flex justify-center gap-4 mt-8 pb-10">
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate(`/view-driver/${id}`)}
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