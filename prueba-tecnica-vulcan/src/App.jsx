import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const user = localStorage.getItem('user')

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
