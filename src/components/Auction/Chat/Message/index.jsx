import React from 'react';
import { formatNumber } from '../../../../utils/formatNumber';
import './style.css';

export const Message = ({ text, time, user, amount }) => {
  const dateTime = new Date(time);
  return (
    <div className="message">
      {' '}
      <div className="message__text">
        {amount ? `Právě bylo přihozeno ${formatNumber(amount)} Kč` : text}
      </div>
      <div className="message__time">
        <div>
          {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
        </div>
        <div>{user}</div>
      </div>
    </div>
  );
};
