import React from 'react';
import { googleSign } from '../../firebase';
import './style.css';

export const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <button className="login__google-btn" onClick={() => googleSign()}>
        {' '}
        Přihlásit s Googlem
      </button>
    </>
  );
};
