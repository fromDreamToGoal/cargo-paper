import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function CreateDocument() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')

  const documents = [
    {
      title: 'Договор-заявка на заказ т/с',
      route: '/create-transport-order'
    },
    {
      title: 'Акт сдачи-приемки',
      route: '/create-acceptance-act'
    },
    {
      title: 'Счёт на оплату',
      route: '/create-invoice'
    },
    {
      title: 'Заявка (образец Флагман)',
      route: '/create-transport-request'
    },
    {
      title: 'Заявка (Образец 1)',
      route: '/create-transport-request-1'
    }
  ]

  const handleCreate = () => {
    if (selectedRoute) {
      navigate(selectedRoute)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="max-w-7xl mx-auto mt-10 px-4 py-8 w-full">
        <h2 className="text-center text-2xl font-semibold italic mt-4 mb-6">
          Создать новый документ
        </h2>

        <div className="flex flex-col items-center gap-4">
          <select
            className="border border-gray-300 rounded px-4 py-2 w-64"
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
          >
            <option value="" disabled>Выберите документ</option>
            {documents.map((doc, index) => (
              <option key={index} value={doc.route}>
                {doc.title}
              </option>
            ))}
          </select>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
            onClick={handleCreate}
            disabled={!selectedRoute}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}