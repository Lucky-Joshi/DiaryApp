import React, { useState } from 'react';
import API from '../utils/api';
import Swal from 'sweetalert2';
import './AddEntryModal.css'; // optional for styling

const AddEntryModal = ({ onClose, onAdded }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    mood: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await API.post('/api/entries', form);
      Swal.fire('Entry saved!', '', 'success');
      onClose();
      onAdded();
    } catch (err) {
      Swal.fire('Error', 'Could not save entry', 'error');
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>New Entry</h2>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows={8}
          placeholder="Write your thoughts..."
          value={form.content}
          onChange={handleChange}
        />
        <select name="mood" value={form.mood} onChange={handleChange}>
          <option value="">Mood</option>
          <option value="😊">😊 Happy</option>
          <option value="😢">😢 Sad</option>
          <option value="😡">😡 Angry</option>
          <option value="❤️">❤️ Love</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <div className="btn-row">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose} className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
