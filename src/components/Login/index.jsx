import React from 'react';
import { googleSign } from '../../firebase';
import './style.css';
import { FcGoogle } from 'react-icons/fc';

export const Login = () => {
  return (
    <>
      <div className="login__flex">
        <div className="login">
          <h2 className="login__header">Log In</h2>
          <div className="login__google">
            <button className="login__google-btn" onClick={() => googleSign()}>
              <FcGoogle className="login__google-icon" />

              <span>Přihlásit přes Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
