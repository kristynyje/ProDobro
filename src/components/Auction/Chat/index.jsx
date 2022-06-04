import React from 'react';
import './style.css';
import { useEffect } from 'react';
import { onValue, push, set } from 'firebase/database';
import { useState } from 'react';
import { Message } from './Message';
import { auth } from '../../../firebase';

export const Chat = ({ chatRef }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(
    () =>
      onValue(chatRef, (snapshot) => {
        const items = [];
        snapshot.forEach((item) => {
          items.push(item.val());
        });
        setMessages(items);
      }),
    [],
  );
  const sendMessage = () => {
    const pushRef = push(chatRef);
    set(pushRef, { text, time: Date.now(), user: auth.currentUser.email });
    setText('');
  };
  return (
    <>
      <div className="chat__container">
        <h3 className="chat__h">Chat</h3>
        <div className="chat__square">
          {messages.map((message, i) => (
            <Message {...message} key={i} />
          ))}
        </div>
        <form
          className="chat__form"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            className="chat__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className="chat_form-btn"> ODESLAT </button>
        </form>
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
};
