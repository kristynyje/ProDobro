import React from 'react';
import './style.css';
import { useState } from 'react';
import { auth } from '../../firebase';

export const Header = ({ user, onSignOut }) => {
  return (
    <header>
      <div className="header__container">
        <h1 className="header__site-title">
          <a href="/">ProDobro</a>
        </h1>
        <div id="navMenu">
          {user && <button onClick={onSignOut}>Odhlásit</button>}
        </div>
      </div>
    </header>
  );
};
