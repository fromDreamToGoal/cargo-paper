import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import AddDriver from './pages/AddDriver'
import Drivers from './pages/Drivers'
import ViewDriver from './pages/ViewDriver'
import EditDriver from './pages/EditDriver'
import Companies from './pages/Companies'
import AddCompany from './pages/AddCompany'
import ViewCompany from './pages/ViewCompany'
import EditCompany from './pages/EditCompany'


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/drivers" element={<Drivers />} />
          <Route path="/view-driver/:id" element={<ViewDriver />} />
          <Route path="/edit-driver/:id" element={<EditDriver />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/view-company/:id" element={<ViewCompany />} />
        <Route path="/edit-company/:id" element={<EditCompany />} />
        {/* другие маршруты */}
      </Routes>
    </Router>
  );
};

export default App;