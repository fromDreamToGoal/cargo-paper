import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectDriverById, removeDriver } from '../store/driversSlice'
import Header from './Header'
import Navigation from './Navigation'

export default function ViewDriver() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = React.useState(false)

  const driver = useSelector(state => selectDriverById(state, id))

  if (!driver) {
    return <div className="p-6">Данные водителя не найдены</div>
  }

  const handleDelete = () => {
    if (window.confirm('Удалить водителя?')) {
      dispatch(removeDriver(id))
      navigate('/drivers')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold my-8">
        Персональные данные водителя
      </h2>

      <div className='flex justify-center'>
        <div className="max-w-5xl min-w-3xl bg-white shadow p-6">
        <table className="w-full border border-black text-left text-sm">
          <tbody>
            {[
              ['ФИО', driver.fullName],
              ['Паспорт номер', driver.passport],
              ['Дата выдачи паспорта', driver.passportDate],
              ['Кем выдан паспорт', driver.passportIssued],
              ['ИНН', driver.inn],
              ['ОГРНИП', driver.ogrnip],
              ['Адрес регистрации', driver.registrationAddress],
              ['Телефон', driver.phone],
              ['Автомобиль', driver.car],
              ['Номер автомобиля', driver.carNumber],
              ['Номер прицепа', driver.trailerNumber],
              ['Система налогообложения', driver.taxSystem],
              ['Электронная почта', driver.email],
              ['ОКВЭД', driver.okved],
              ['КПП', driver.kpp],
              ['Наименование банка', driver.bankName],
              ['БИК', driver.bik],
              ['кор/сч', driver.kor],
              ['р/сч', driver.ras]
            ].map(([label, value]) => (
              <tr key={label} className="border border-black">
                <td className="border px-2 py-1 font-semibold w-1/3">{label}</td>
                <td className="border px-2 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      <div className="flex justify-center gap-4 mt-8 mb-8">
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate('/drivers')}
        >
          &lt; Назад
        </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => navigate('/driver-card-preview', { state: { driver } })}
      >
        Карточка клиента
      </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate(`/edit-driver/${id}`)}
        >
          Редактировать данные
        </button>
        <button
          className="bg-red-200 text-red-800 px-4 py-2 rounded hover:bg-red-300"
          onClick={handleDelete}
        >
          Удалить водителя
        </button>
      </div>
    </div>
  )
}