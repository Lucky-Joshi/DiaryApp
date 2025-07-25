import React, { useState } from 'react';
import { getUser, logout } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile = () => {
  const user = getUser();
  const [email] = useState(user?.email || '');
  const [username] = useState(user?.username || '');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    Swal.fire('Logged out', '', 'info');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
