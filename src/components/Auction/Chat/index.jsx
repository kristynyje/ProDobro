import React, { useMemo, useRef } from 'react';
import './style.css';
import { useEffect } from 'react';
import { onValue, push, set } from 'firebase/database';
import { useState } from 'react';
import { Message } from './Message';
import { auth } from '../../../firebase';
import Picker from 'emoji-picker-react';

export const Chat = ({ chatRef, data: { amount } }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [emojisOpened, setEmojisOpened] = useState(false);
  const scrollRef = useRef(null);
  const mixedMess = useMemo(() => {
    const result = [...messages, ...Object.values(amount)];
    result.sort((a, b) => a.time - b.time);
    return result;
  }, [amount, messages]);

  useEffect(() => {
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [mixedMess]);
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
    setEmojisOpened(false);
    const pushRef = push(chatRef);
    set(pushRef, { text, time: Date.now(), user: auth.currentUser.email });
    setText('');
  };
  const handleEmojiClick = (_, emojiObj) => {
    setText(text + emojiObj.emoji);
  };
  return (
    <>
      <div className="chat">
        <h3 className="chat__header">Chat</h3>
        <div className="chat__square" ref={scrollRef}>
          {mixedMess.map((message, i) => (
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
          <button
            className="chat__emoji-btn"
            onClick={() => setEmojisOpened(!emojisOpened)}
            type="button"
          >
            🙂
          </button>
          <button className="chat__form-btn" type="submit">
            ODESLAT{' '}
          </button>
        </form>
        {emojisOpened && <Picker onEmojiClick={handleEmojiClick} />}
      </div>
      <br></br>
    </>
  );
};
