import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import AddDriver from './pages/AddDriver'
import Drivers from './pages/Drivers'
import ViewDriver from './pages/ViewDriver'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/drivers" element={<Drivers />} />
          <Route path="/view-driver/:id" element={<ViewDriver />} />
        {/* другие маршруты */}
      </Routes>
    </Router>
  );
};

export default App;