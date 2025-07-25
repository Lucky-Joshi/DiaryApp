import React from 'react';
import API from '../utils/api';
import Swal from 'sweetalert2';

const EntryCard = ({ entry, refresh }) => {
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: 'Delete this entry?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    });
    if (confirm.isConfirmed) {
      await API.delete(`/api/entries/${entry._id}`);
      Swal.fire('Deleted', '', 'success');
      refresh();
    }
  };

  const togglePin = async () => {
    await API.patch(`/api/entries/${entry._id}`, {
      pinned: !entry.pinned,
    });
    refresh();
  };

  return (
    <div className="entry-card">
      <div className="entry-header">
        <span>{entry.mood}</span>
        <h3>{entry.title}</h3>
        <small>{new Date(entry.date).toDateString()}</small>
      </div>
      <p>{entry.content}</p>
      <div className="entry-actions">
        <button onClick={togglePin}>
          {entry.pinned ? 'Unpin' : 'Pin'}
        </button>
        <button onClick={handleDelete} className="danger">Delete</button>
      </div>
    </div>
  );
};

export default EntryCard;
