import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import AddEntryModal from '../components/AddEntryModal';
import EntryCard from '../components/EntryCard';
import { getUser, logout } from '../utils/auth'; // import logout
import Swal from 'sweetalert2';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(null);

  const navigate = useNavigate();
  const user = getUser();

  const fetchEntries = async () => {
    try {
      const res = await API.get('/api/entries');
      setEntries(res.data);
    } catch (err) {
      Swal.fire('Failed to load entries', '', 'error');
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const filteredEntries = filter
    ? entries.filter((e) => e.mood === filter)
    : entries;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <span className="user-label">{user?.email || 'Guest'}</span>

        {user ? (
          <button className="add-entry-btn" onClick={() => setShowModal(true)}>➕ Add Entry</button>
        ) : (
          <div className="auth-buttons">
            <button className="auth-btn login-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="auth-btn signup-btn" onClick={() => navigate('/signup')}>Signup</button>
          </div>
        )}
      </header>

      <div className="filters">
        {['😊', '😢', '😡', '❤️'].map((emoji) => (
          <button key={emoji} onClick={() => setFilter(emoji)}>
            {emoji}
          </button>
        ))}
        <button onClick={() => setFilter(null)}>Clear</button>
      </div>

      <div className="entry-list">
        {filteredEntries.length === 0 ? (
          <p>No entries yet. Start journaling!</p>
        ) : (
          filteredEntries.map((entry) => (
            <EntryCard key={entry._id} entry={entry} refresh={fetchEntries} />
          ))
        )}
      </div>

      {showModal && (
        <AddEntryModal
          onClose={() => setShowModal(false)}
          onAdded={fetchEntries}
        />
      )}

      {user && (
        <button className="logout-btn-bottom" onClick={handleLogout}>
          🚪 Logout
        </button>
      )}
    </div>
  );
};

export default Dashboard;
