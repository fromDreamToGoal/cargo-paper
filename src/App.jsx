import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* другие маршруты */}
      </Routes>
    </Router>
  );
};

export default App;