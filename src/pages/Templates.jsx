import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Templates() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const templates = [
    { name: 'Договор-заявка на заказ транспортного средства', version: '11.06.2025', path: '/transport-order-preview' },
    { name: 'Акт сдачи-приемки', version: '' },
    { name: 'Счет на оплату', version: '1.06.2025', path: '/invoice-preview' },
    { name: 'Заявка', version: '' },
    { name: 'Карта клиента', version: '8.06.2025', path: '/driver-card-preview' },
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
                    onClick={() => {
                      if (tpl.path === '/invoice-preview') {
                        navigate(tpl.path, {
                          state: {
                            data: {
                              invoiceNumber: '123',
                              invoiceDate: '2025-06-05',
                              service: 'Транспортные услуги',
                              unit: 'тонна',
                              quantity: 12,
                              price: 5000,
                              contractor: {
                                fullName: 'Иванов Иван Иванович',
                                inn: '1234567890',
                                bankAccount: '40702810900000000001',
                                bik: '044525225',
                                kor: '30101810400000000225',
                                ras: '4080281044099000234',
                                correspondentAccount: '30101810400000000225',
                                bankName: 'АО Банк',

                              },
                              client: {
                                name: 'ООО Ромашка',
                                inn: '7701234567',
                                bankName: 'АО КлиентБанк',
                                bik: '044525987',
                                bankAccount: '40702810200000000002',
                                address: 'г. Москва, ул. Примерная, д. 1',
                                okpo: '12345678',
                                rs: '4080281044099000234',
                                ogrnip: '312345678900012',
                              },
                            },
                          },
                        });
                      } else if (tpl.path === '/driver-card-preview') {
                        navigate(tpl.path, {
                          state: {
                            driver: {
                              fullName: 'Герасименко Виктор Владимирович',
                              inn: '910600165196',
                              ogrnip: '314910234711922',
                              registrationAddress: '296000 г. Красноперекопск ул. Менделеева 27 кв.3',
                              phone: '+7 978 8088890',
                              taxSystem: 'УСН',
                              okved: '49.41 Деятельность Автомобильного грузового транспорта',
                              email: 'Gerasimenko-s@list.ru',
                              bik: '043510607',
                              bankName: 'РНКБ ПАО',
                              kor: '30101810335100000607',
                              ras: '4080281044099000235',
                            },
                          },
                        });
                      } else if (tpl.path === '/transport-order-preview') {
                        navigate(tpl.path, {
                          state: {
                            data: {
                              driver: { fullName: 'Герасименко Виктор Владимирович' },
                              client: { name: 'ООО Ромашка' },
                              issueDate: '2025-06-05',
                              loadDate: '2025-06-06',
                              loadAddress: 'г. Красноперекопск, ул. Менделеева, д. 1',
                              loadType: 'Комбинированная',
                              contactPerson: 'Иванов Иван Иванович',
                              consignee: 'Петров Петр Петрович',
                              unloadDate: '2025-06-07',
                              unloadAddress: 'г. Санкт-Петербург, ул. Образцовая, д. 2',
                              unloadContactPerson: 'Сидоров Сидор Сидорович',
                              vehicleType: 'Грузовой автомобиль',
                              vehicleCount: 1,
                              placesCount: '10 пд.',
                              cargoType: 'Песок',
                              packaging: 'Мешки по 50 кг',
                              paymentType: 'Наличный расчет',
                              paymentTerms: 'Оплата при получении груза',
                              price: 15000,
                            },
                          },
                        });
                      } else {
                        navigate(`${tpl.path || '/main'}`);
                      }
                    }}
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
