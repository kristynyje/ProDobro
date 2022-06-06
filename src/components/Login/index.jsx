import React from 'react';
import { googleSign } from '../../firebase';
import './style.css';

export const Login = () => {
  return (
    <>
      <div className="login__flex">
        <div className="login">
          <h2 className="login__header">Log In</h2>
          <button className="login__google-btn" onClick={() => googleSign()}>
            {' '}
            Přihlásit přes Google
          </button>
        </div>
      </div>
    </>
  );
};
