import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Templates() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const templates = [
    { name: 'Договор-заявка на заказ транспортного средства', version: '' },
    { name: 'Акт сдачи-приемки', version: '' },
    { name: 'Счет на оплату', version: '1.06.2025', path: '/invoice-preview' },
    { name: 'Заявка', version: '' },
    { name: 'Карта клиента', version: '' }
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <h2 className="text-center text-2xl font-semibold mt-10 mb-6">Шаблоны</h2>

      <div className="flex justify-center">
        <table className="min-w-[600px] border border-black text-sm bg-white">
          <thead>
            <tr className="border border-black bg-gray-100">
              <th className="px-4 py-2 border border-black text-left">Тип документа</th>
              <th className="px-4 py-2 border border-black text-left">Версия шаблона</th>
              <th className="px-4 py-2 border border-black text-left"></th>
            </tr>
          </thead>
          <tbody>
            {templates.map((tpl, index) => (
              <tr key={index} className="border border-black">
                <td className="border px-4 py-2">{tpl.name}</td>
                <td className="border px-4 py-2 text-center">{tpl.version}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    title="Просмотр"
                    className="text-xl hover:text-black text-gray-600"
                    onClick={() => navigate(`${tpl.path || '/main'}`)}
                  >
                    👁
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
