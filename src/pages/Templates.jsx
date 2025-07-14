import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

export default function Templates() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const templates = [
    { name: 'Карточка клиента', version: '8.06.2025', path: '/driver-card-preview' },
    { name: 'Договор-заявка на заказ транспортного средства', version: '11.06.2025', path: '/transport-order-preview' },
    { name: 'Акт сдачи-приемки', version: '19.06.2025', path: '/acceptance-act-preview' },
    { name: 'Счет на оплату', version: '1.06.2025', path: '/invoice-preview' },
    { name: 'Заявка (образец Флагман)', version: '21.06.2025', path: '/transport-request-preview' },
    { name: 'Заявка 1', version: '11.07.2025', path: '/transport-request-1-preview' },
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
                              invoiceDate: '2025-02-05',
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
                      } else if (tpl.path === '/acceptance-act-preview') {
                        navigate(tpl.path, {
                          state: {
                            data: {
                              actNumber: '001',
                              actDate: '2025-01-05',
                              driver: {
                                fullName: 'Герасименко Виктор Владимирович',
                                registrationAddress: '296000, г. Красноперекопск, ул. Менделеева, д. 27, кв. 3',
                                inn: '910600165196',
                                ras: '4080281044099000235',
                                bik: '043510607',
                                kor: '30101810335100000607',
                                bankName: 'РНКБ ПАО',
                              },
                              client: {
                                name: 'ООО Ромашка',
                                inn: '7701234567',
                                address: 'г. Москва, ул. Примерная, д. 1',
                                rs: '4080281044099000234',
                                bik: '044525987',
                                bankName: 'АО КлиентБанк',
                              },
                              service: 'Транспортные услуги',
                              serviceDate: '2025-06-05',
                              priceInWords: 'Пятнадцать тысяч рублей 00 копеек',
                              price: 15,
                              quantity: 20,
                              unit: 'тонна',
                              routeStart: 'г. Красноперекопск, ул. Менделеева, д. 1',
                              routeEnd: 'г. Санкт-Петербург, ул. Образцовая, д. 2',
                            },
                          },
                        });
                      } 
                      else if (tpl.path === '/driver-card-preview') {
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
                              driver: { fullName: 'Герасименко Виктор Владимирович',
                                passportDate: '2015-10-05',
                                registrationAddress: '296000, Красноперекопск, Первушина 6А кв.33',
                                passport: '1234 567890',
                                passportIssued: 'УФМС России по Республике Крым',
                                car: 'ГАЗель',
                                carNumber: 'КР1234',
                                trailerNumber: 'КР1234',
                                inn: '910604369793',
                                rs: '1235697182578978',
                                bik: '124786',
                                bankName: 'Pekao Bank',
                                ks: '7723982191664829',
                                phone: '+3809991230186',
                                email: 'registr@gmail.com'
                               },
                              client: { name: 'ООО Ромашка',
                                inn: '7701234567',
                                kpp: '770101001',
                                address: 'г. Москва, ул. Примерная, д. 1',
                                rs: '4080281044099000234',
                                bik: '044525987',
                                bankName: 'АО КлиентБанк',
                                ks: '30101810400000000225',
                                director: 'Петров Петр Петрович',
                                phone: '+7 495 123-45-67',
                                email: 'Gerasimenko@list.ru',
                               },
                              issueDate: '2025-04-05',
                              loadDate: '2025-06-06',
                              loadAddress: 'г. Красноперекопск, ул. Менделеева, д. 1',
                              loadType: 'Комбинированная',
                              contactPerson: 'Иванов Иван Иванович',
                              consignee: 'Петров Петр Петрович',
                              unloadDate: '2025-06-07',
                              unloadAddress: 'г. Санкт-Петербург, ул. Образцовая, д. 2',
                              unloadContactPerson: 'Сидоров Сидор Сидорович',
                              unloadType: 'Cамосвал',
                              specialNotes: 'Подача ТС за 2 часа до загрузки',
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
                      } else if (tpl.path === '/transport-request-preview') {
                        navigate(tpl.path, {
                          state: {
                            data: {
                              appNumber: '1',
                              contractNumber: '42/Д',
                              contractDate: '2025-01-01',
                              loadAddress: 'г. Симферополь, ул. Промышленная, д. 10',
                              unloadAddress: 'г. Москва, ул. Примерная, д. 5',
                              loadDate: '2025-06-20',
                              rate: '2900',
                              vehicle: 'Грузовой автомобиль',
                              driver: {
                                fullName: 'Кательницкий Александр Сергеевич',
                                car: 'ГАЗель',
                                carNumber: 'КР1234',
                                trailerNumber: 'HI45321',
                              },
                              cargo: 'Отруби пшеничные',
                              weight: '35 тонн',
                              client: { 
                                name: 'ООО Тест',
                                director: 'Сидоров Сидор Сидорович', 
                              }
                            }
                          }
                        });
                      } else if (tpl.path === '/transport-request-1-preview') {
                        navigate(tpl.path, {
                          state: {
                            data: {
                              driver: {
                                fullName: 'Герасименко Виктор Владимирович',
                                car: 'ГАЗель',
                                carNumber: 'КР1234',
                                trailerNumber: 'КР1234',
                                passport: '45 12 123',
                                passportIssued: 'УФМС России по РК',
                                registrationAddress: 'г. Красноперекопск, ул. Менделеева, д. 27, кв. 3',
                                phone: '+7 978 8088890',
                              },
                              client: {
                                name: 'ООО Тест',
                                director: 'Петров Петр Петрович',
                              },
                              appNumber: 'TR-2025-01',
                              appDate: '2025-07-11',
                              route: 'Симферополь — Москва',
                              loadDate: '2025-07-12',
                              loadAddress: 'г. Симферополь, ул. Промышленная, д. 10',
                              loadCompany: 'ООО СимферТранс',
                              cargoDescription: 'Отруби пшеничные, 35 тонн',
                              loadingType: 'Задняя',
                              loadContact: 'Иванов Иван Иванович, +7 978 1111111',
                              unloadDate: '2025-07-14',
                              unloadAddress: 'г. Москва, ул. Примерная, д. 5',
                              unloadContact: 'Петров Петр Петрович, +7 495 2222222',
                              additionalTerms: 'Погрузка строго по времени, простой не более 2 часов.',
                              price: '29000',
                              waitingNorm: '2 часа',
                              clientName: 'ООО Тест',
                            }
                          }
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
