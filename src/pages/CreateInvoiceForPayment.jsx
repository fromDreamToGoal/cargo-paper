import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';

const CreateInvoiceForPayment = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const drivers = useSelector(state => state.drivers.drivers || []);
  const clients = useSelector(state => state.companies.companies || []);

  const [formData, setFormData] = useState({
    invoiceNumber: '',
    invoiceDate: '',
    contractorId: '',
    clientId: '',
    service: 'транспортные услуги',
    unit: 'тонна',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const contractor = drivers.find(driver => driver.id === formData.contractorId);
    const client = clients.find(company => company.id === formData.clientId);

    const fullData = {
      ...formData,
      contractor,
      client,
    };

    console.log('Данные, передаваемые в PDF:', fullData);
    navigate('/invoice-preview', { state: { data: fullData } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-10">Создать счет на оплату</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded shadow" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div>
            <label className="block font-semibold mb-1">Номер счета</label>
            <input name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Дата счета</label>
            <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Исполнитель (водитель)</label>
            <select name="contractorId" value={formData.contractorId} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option value="">Выберите исполнителя</option>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>{driver.fullName}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Покупатель (фирма)</label>
            <select name="clientId" value={formData.clientId} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option value="">Выберите покупателя</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>{client.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Услуга</label>
            <input name="service" value={formData.service} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Ед. измерения</label>
            <input name="unit" value={formData.unit} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Количество</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Сумма</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
        </form>

        <div className="text-center mt-6">
          <button type="button" onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Создать документ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceForPayment;