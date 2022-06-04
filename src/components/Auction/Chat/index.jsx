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
      <div className="chat">
        <h3 className="chat__header">Chat</h3>
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
          <button className="chat__form-btn"> ODESLAT </button>
        </form>
      </div>
      <br></br>
    </>
  );
};
