import React from 'react';

function Message({ message }) {
  return (
    <div className="empty-state">
      <p>{message || 'Please enter a city to get weather information.'}</p>
    </div>
  );
}

export default Message;
