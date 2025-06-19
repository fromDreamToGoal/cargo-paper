import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Navigation from './Navigation';

const CreateAcceptanceAct = () => {
    const drivers = useSelector((state) => state.drivers.drivers);
    const companies = useSelector((state) => state.companies.companies);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        actNumber: '',
        actDate: '',
        driverId: '',
        clientId: '',
        service: 'транспортные услуги',
        serviceDate: '',
        routeStart: '',
        routeEnd: '',
        price: '',
        quantity: '',
        unit: 'тонна',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const driver = drivers.find(d => d.id === formData.driverId);
        const client = companies.find(c => c.id === formData.clientId);
        console.log('Form Data:', formData);
        navigate('/acceptance-act-preview', {
            state: {
                data: {
                    ...formData,
                    driver,
                    client
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header onMenuClick={() => setMenuOpen(true)} />
            <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className="max-w-4xl mx-auto p-4 bg-white mt-4 shadow">
                <h2 className="text-xl text-center mb-4">Создать акт сдачи приемки выполненных работ</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col ">
                        Номер акта
                        <input name="actNumber" value={formData.actNumber} onChange={handleChange} className="border p-2" />
                    </label>

                    <label className="flex flex-col">
                        Дата акта
                        <input name="actDate" value={formData.actDate} onChange={handleChange} type="date" className="border p-2" />
                    </label>

                    <label className="flex flex-col">
                        Исполнитель
                        <select name="driverId" value={formData.driverId} onChange={handleChange} className="border p-2">
                            <option value="">Выберите исполнителя</option>
                            {drivers.map(driver => (
                                <option key={driver.id} value={driver.id}>{driver.fullName}</option>
                            ))}
                        </select>
                    </label>

                    <label className="flex flex-col">
                        Заказчик
                        <select name="clientId" value={formData.clientId} onChange={handleChange} className="border p-2">
                            <option value="">Выберите заказчика</option>
                            {companies.map(client => (
                                <option key={client.id} value={client.id}>{client.name}</option>
                            ))}
                        </select>
                    </label>

                    <label className='flex flex-col'>
                        Наименование услуги
                        <input name="service" value={formData.service} onChange={handleChange} className="border p-2" />
                    </label>

                    <label className='flex flex-col'>
                        Дата оказания услуги
                        <input name="serviceDate" value={formData.serviceDate} onChange={handleChange} type="date" className="border p-2" />
                    </label>

                    <label className='flex flex-col'>
                        Начальная точка маршрута
                        <input name="routeStart" value={formData.routeStart} onChange={handleChange} className="border p-2" />
                    </label>

                    <label className='flex flex-col'>
                        Конечная точка маршрута
                        <input name="routeEnd" value={formData.routeEnd} onChange={handleChange}  className="border p-2" />
                    </label>
                    
                    <label className='flex flex-col'>
                        Цена
                        <input name="price" type='number' value={formData.price} onChange={handleChange} className="border p-2" />
                    </label>
                    
                    <label className='flex flex-col'>
                        Количество
                        <input name="quantity" type='number' value={formData.quantity} onChange={handleChange} className="border p-2" />
                    </label>
                    
                    <label className='flex flex-col'>
                        Единица измерения
                        <input name="unit" value={formData.unit} onChange={handleChange} placeholder="Ед. измерения" className="border p-2" />
                    </label>
                    
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
                    >
                        Создать документ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAcceptanceAct;
