

import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCompanyById, removeCompany } from '../store/companiesSlice'
import Header from './Header'
import Navigation from './Navigation'

export default function ViewCompanie() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

  const company = useSelector(state => selectCompanyById(state, id))

  if (!company) return <div className="p-6">Компания не найдена</div>

  const handleDelete = () => {
    if (window.confirm('Удалить эту фирму?')) {
      dispatch(removeCompany(id))
      navigate('/companies')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold my-8">
        Персональные данные фирмы
      </h2>

      <div className="flex justify-center">
        <div className="max-w-5xl min-w-3xl bg-white shadow p-6">
          <table className="w-full border border-black text-left text-sm">
            <tbody>
              {[
                ['Название', company.name],
                ['Генеральный директор', company.director],
                ['Телефон директора', company.directorPhone],
                ['Телефон бухгалтера', company.accountantPhone],
                ['Электронный адрес', company.email],
                ['Адрес', company.address],
                ['Название банка', company.bankName],
                ['ОГРН', company.ogrn],
                ['ОКПО', company.okpo],
                ['ОКВЭД', company.okved],
                ['ИНН', company.inn],
                ['КПП', company.kpp],
                ['БИК', company.bik],
                ['р/с', company.rs],
                ['к/с', company.ks],
                ['Система налогообложения', company.taxSystem]
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
          onClick={() => navigate('/companies')}
        >
          &lt; Назад
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate(`/edit-company/${id}`)}
        >
          Редактировать данные
        </button>
        <button
          className="bg-red-200 text-red-800 px-4 py-2 rounded hover:bg-red-300"
          onClick={handleDelete}
        >
          Удалить фирму
        </button>
      </div>
    </div>
  )
}