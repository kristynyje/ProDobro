import React from 'react';
import './style.css';

export const Message = ({ text, time, user }) => {
  const dateTime = new Date(time);
  return (
    <div className="message__container">
      <div className="message__text"> {text}</div>
      <div className="message__time">
        <div>
          {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
        </div>
        <div>{user}</div>
      </div>
    </div>
  );
};
