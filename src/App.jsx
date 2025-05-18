import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        {/* другие маршруты */}
      </Routes>
    </Router>
  );
};

export default App;