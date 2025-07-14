import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Navigation from './Navigation'

const CreateTransportRequest1 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        driver: '',
        client: '',
        appNumber: '',
        appDate: '',
        route: '',
        loadDate: '',
        loadAddress: '',
        loadCompany: '',
        cargoDescription: '',
        loadingType: '',
        loadContact: '',
        unloadDate: '',
        unloadAddress: '',
        unloadContact: '',
        additionalTerms: '',
        price: '',
        waitingNorm: '',
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
        navigate('/transport-request-1-preview', { state: { data: documentData } });
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-between">
            <Header onMenuClick={() => setMenuOpen(true)} />
            <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-xl font-medium mb-8 text-center">
                    Создание Заявки (образец 1)
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
                            Заявка Nº
                            <input type="text" name="appNumber" value={formData.appNumber} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Дата договора
                            <input type="date" name="appDate" value={formData.contractDate} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Маршрут
                            <input type="text" name="route" value={formData.route} onChange={handleChange} className="border p-2" />
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
                            Компания загрузки
                            <input type="text" name="loadCompany" value={formData.loadCompany} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Описание груза
                            <input type="text" name="cargoDescription" value={formData.cargoDescription} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Вид загрузки
                            <select name="loadingType" value={formData.loadType} onChange={handleChange} className="border p-2">
                                <option value="">Выбрать вид загрузки</option>
                                <option value="Задняя">Задняя</option>
                                <option value="Боковая">Боковая</option>
                                <option value="Верхняя">Верхняя</option>
                                <option value="Комбинированная">Комбинированная</option>
                                <option value="Без упаковки">Без упаковки</option>
                            </select>
                        </label>

                        <label className="flex flex-col">
                            Контактное лицо загрузки
                            <input type="text" name="loadContact" value={formData.loadContact} onChange={handleChange} className="border p-2" />
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

                        <label className='flex flex-col'>
                            Контактное лицо при выгрузке
                            <input type="text" name="unloadContact" value={formData.unloadContact} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Дополнительные условия
                            <textarea name="additionalTerms" value={formData.additionalTerms} onChange={handleChange} className="border p-2 h-24" />
                        </label>

                        <label className="flex flex-col">
                            Стоимость перевозки, руб.
                            <input type="text" name="price" value={formData.price} onChange={handleChange} className="border p-2" />
                        </label>

                        <label className="flex flex-col">
                            Нормативный простой
                            <input type="text" name="waitingNorm" value={formData.waitingNorm} onChange={handleChange} className="border p-2" />
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

export default CreateTransportRequest1;