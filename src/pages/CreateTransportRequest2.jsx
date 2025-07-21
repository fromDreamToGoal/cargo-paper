import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Navigation from './Navigation'

const CreateTransportRequest2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        contractNumber: '',
        appNumber: '',
        contractDate: '',
        specificationNumber: '',
        specificationPlace: '',
        specificationDate: '',
        driver: '',
        client: '',
        vehicleCapacity: '',
        route: '',
        pricePerKg: '',
        totalPrice: '',
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
        navigate('/transport-request-2-preview', { state: { data: documentData } });
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center ">
            <Header onMenuClick={() => setMenuOpen(true)} />
            <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />

            <div className="max-w-7xl mx-auto mt-10 px-4 py-8 w-full">
                <h2 className="text-center text-2xl font-semibold italic mt-4 mb-6">
                    Создать заявку (Образец 2)
                </h2>

                <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-6 rounded shadow-md">
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
                            Номер договора
                            <input
                                type="text"
                                name="contractNumber"
                                value={formData.contractNumber}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Введите номер договора"
                            />
                        </label>

                        <label className="flex flex-col">
                            Номер приложения
                            <input
                                type="text"
                                name="appNumber"
                                value={formData.appNumber}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Введите номер приложения"
                            />
                        </label>

                        <label className="flex flex-col">
                            Дата договора
                            <input
                                type="date"
                                name="contractDate"
                                value={formData.contractDate}
                                onChange={handleChange}
                                className="border p-2"
                            />
                        </label>

                        <label className="flex flex-col">
                            СПЕЦИФИКАЦИЯ №
                            <input
                                type="text"
                                name="specificationNumber"
                                value={formData.specificationNumber}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Введите номер спецификации"
                            />
                        </label>

                        <label className="flex flex-col">
                            Место составления
                            <input
                                type="text"
                                name="specificationPlace"
                                value={formData.specificationPlace}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Например: г.Ялта"
                            />
                        </label>

                        <label className="flex flex-col">
                            Дата составления
                            <input
                                type="date"
                                name="specificationDate"
                                value={formData.specificationDate}
                                onChange={handleChange}
                                className="border p-2"
                            />
                        </label>

                        <label className="flex flex-col">
                            Грузоподъемность ТС
                            <input
                                type="text"
                                name="vehicleCapacity"
                                value={formData.vehicleCapacity}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Например: 20 тонн"
                            />
                        </label>

                        <label className="flex flex-col">
                            Маршрут
                            <input
                                type="text"
                                name="route"
                                value={formData.route}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Введите направление перевозки"
                            />
                        </label>

                        <label className="flex flex-col">
                            Цена за кг
                            <input
                                type="text"
                                name="pricePerKg"
                                value={formData.pricePerKg}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Например: 3 рубля за кг"
                            />
                        </label>

                        <label className="flex flex-col">
                            Общая цена
                            <input
                                type="text"
                                name="totalPrice"
                                value={formData.totalPrice}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Введите цену перевозки"
                            />
                        </label>

                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Создать документ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTransportRequest2;