import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function CreateDocument() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const documents = [
    {
      title: 'Договор-заявка на заказ т/с',
      img: 'src/assets/templates/template-1.jpeg',
      route: '/create-transport-order'
    },
    {
      title: 'Акт сдачи-приемки',
      img: 'src/assets/templates/template-2.jpeg',
      route: '/create-acceptance-act'
    },
    {
      title: 'Счёт на оплату',
      img: 'src/assets/templates/template-3.jpeg',
      route: '/create-invoice'
    },
    {
      title: 'Заявка',
      img: 'src/assets/templates/template-4.jpeg',
      route: '/create-request'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-between  bg-[#F5F5F5]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-2xl font-semibold italic mt-4 mb-15">
            Создать новый документ
            </h2>

            <div className="flex justify-center flex-wrap gap-10 px-4">
            {documents.map((doc, index) => (
            <div
               key={index}
               className="w-[180px] flex flex-col items-center cursor-pointer hover:opacity-80"
                onClick={() => navigate(doc.route)}
              >
               <div className="w-[180px] h-[250px] bg-gray-200 shadow-md flex items-center justify-center">
                 <img src={doc.img} alt={doc.title} className="max-h-full max-w-full object-contain" />
               </div>
             <p className="mt-2 text-sm text-center">{doc.title}</p>
             </div>
            ))}
         </div>
      </div>
    </div>
  )
}