import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { isLoggedIn } from './utils/auth';
import { initUUID } from './utils/uuid';

import './index.css';

function App() {
  initUUID(); // ensures UUID exists

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={isLoggedIn() || localStorage.getItem('uuid') ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={isLoggedIn() ? <Profile /> : <Navigate to="/dashboard" />}
      />
    </Routes>
  );
}

export default App;
