import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../utils/auth';
import API from '../utils/api';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/register', form);
      saveUser(res.data);
      Swal.fire('Account created!', '', 'success');
      navigate('/dashboard');
    } catch (err) {
      Swal.fire('Signup failed', err.response.data.message, 'error');
    }
  };

  return (
    <div className="container">
      <h1>Create Your Diary V7 Account</h1>
      <form onSubmit={handleSignup}>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
