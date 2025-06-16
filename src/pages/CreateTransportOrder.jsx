import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Navigation from './Navigation'

const CreateTransportOrder = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    driver: '',
    client: '',
    issueDate: '',
    loadDate: '',
    loadAddress: '',
    unloadDate: '',
    unloadAddress: '',
    price: '',
    cargoType: '',
    packaging: '',
    paymentType: '',
    paymentTerms: '',
    contactPerson: '',
    consignee: '',
    unloadContactPerson: '',
    vehicleType: '',
    vehicleCount: '',
    placesCount: '',
    loadType: '',
    unloadType: '',
    specialNotes: '',
  });
  const drivers = useSelector((state) => state.drivers.drivers);
  const companies = useSelector((state) => state.companies.companies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.loadAddress) {
      dispatch({ type: 'addresses/addLoadAddress', payload: formData.loadAddress });
    }
    if (formData.unloadAddress) {
      dispatch({ type: 'addresses/addUnloadAddress', payload: formData.unloadAddress });
    }

    const driver = drivers.find(d => d.id === formData.driver);
    const client = companies.find(c => c.id === formData.client);

    const documentData = {
      ...formData,
      driver,
      client
    };
    console.log('Document Data:', documentData);
    navigate('/transport-order-preview', { state: { data: documentData } });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-between">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="max-w-7xl mx-auto px-4 py-8">
         <h2 className="text-xl font-medium mb-8 text-center">
           Создание Договора-заявки на заказ транспортного средства
         </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white shadow p-6 rounded">
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col">
            Водитель
            <select name="driver" value={formData.driver} onChange={handleChange} className="border p-2">
              <option value="">Выбрать водителя</option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.fullName}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            Клиент
            <select name="client" value={formData.client} onChange={handleChange} className="border p-2">
              <option value="">Выбрать клиента</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            Дата выставления документа
            <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Дата загрузки
            <input type="date" name="loadDate" value={formData.loadDate} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Адрес загрузки
            <input list="load-options" name="loadAddress" value={formData.loadAddress} onChange={handleChange} className="border p-2" />
            <datalist id="load-options">
              {useSelector(state => state.addresses.loadAddresses).map((addr, index) => (
                <option key={index} value={addr} />
              ))}
            </datalist>
          </label>

          <label className="flex flex-col">
            Контактное лицо
            <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Грузополучатель
            <input name="consignee" value={formData.consignee} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Дата выгрузки
            <input type="date" name="unloadDate" value={formData.unloadDate} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Адрес выгрузки
            <input list="unload-options" name="unloadAddress" value={formData.unloadAddress} onChange={handleChange} className="border p-2" />
            <datalist id="unload-options">
              {useSelector(state => state.addresses.unloadAddresses).map((addr, index) => (
                <option key={index} value={addr} />
              ))}
            </datalist>
          </label>

          <label className="flex flex-col">
            Контактное лицо при выгрузке
            <input name="unloadContactPerson" value={formData.unloadContactPerson} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Тип транспортного средства
            <input name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Количество ТС
            <input name="vehicleCount" value={formData.vehicleCount} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Количество мест
            <input name="placesCount" value={formData.placesCount} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Вид загрузки
            <select name="loadType" value={formData.loadType} onChange={handleChange} className="border p-2">
              <option value="Задняя">Задняя</option>
              <option value="Боковая">Боковая</option>
              <option value="Верхняя">Верхняя</option>
              <option value="Комбинированная">Комбинированная</option>
              <option value="Без упаковки">Без упаковки</option>
            </select>
          </label>

          <label className="flex flex-col">
            Вид выгрузки
            <select name="unloadType" value={formData.unloadType} onChange={handleChange} className="border p-2">
              <option value="Задняя">Задняя</option>
              <option value="Боковая">Боковая</option>
              <option value="Верхняя">Верхняя</option>
              <option value="Самосвал">Самосвал</option>
            </select>
          </label>

          <label className="flex flex-col">
            Особые отметки/дополнительная информация
            <input name="specialNotes" value={formData.specialNotes} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Цена
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Характер груза
            <input name="cargoType" value={formData.cargoType} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Упаковка
            <input name="packaging" value={formData.packaging} onChange={handleChange} className="border p-2" />
          </label>

          <label className="flex flex-col">
            Форма оплаты
            <select name="paymentType" value={formData.paymentType} onChange={handleChange} className="border p-2">
              <option value="наличный">Наличный</option>
              <option value="безнал">Безнал</option>
            </select>
          </label>

          <label className="flex flex-col">
            Условия оплаты
            <input name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} className="border p-2" />
          </label>
        </div>

        <div className="mt-6 flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Создать документ
          </button>
        </div>
       </form> 
      </div>
    </div>
  );
};

export default CreateTransportOrder;
