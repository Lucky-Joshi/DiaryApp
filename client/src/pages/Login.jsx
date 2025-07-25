import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../utils/auth';
import API from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/login', { email, password });
      saveUser(res.data);
      Swal.fire('Welcome back!', '', 'success');
      navigate('/dashboard');
    } catch (err) {
      Swal.fire('Login failed', err.response.data.message, 'error');
    }
  };

  return (
    <div className="container">
      <h1>Login to Diary V7</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;
