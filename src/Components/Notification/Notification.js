import React from 'react';
import './Notification.css';

const Notification = ({ message, success, onClose }) => {
  return (
    <div className={`notification ${success ? 'success' : 'error'}`}>
      <p>{message}</p>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;