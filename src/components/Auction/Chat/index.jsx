import React from 'react';
import './style.css';

export const Chat = () => (
  <>
    <div className="chat__container">
      <h3 className="chat__h">Chat</h3>
      <div className="chat__square"></div>
    </div>
    <br></br>
    {/* <div className="chat__end-container">
        <p style={{ color: 'red' }}>
          /// v případě, že by byla aukce ukončena /// ==>{' '}
        </p>

        <h3 className="chat__end">{'Ukončeno'.toUpperCase()}</h3>
      
        <img className="chat__winner-pic" alt="Aukce příklep" src={Winner} />
        <p className="chat__winner-text">
          Vítězem aukce je XY, předmět byl vydražen za X Kč.{' '}
        </p>
      </div> */}
  </>
);
