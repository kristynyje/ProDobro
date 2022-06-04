import React from 'react';
import './style.css';
import { useState } from 'react';

export const Header = () => (
  <header>
    <div className="header__container">
      <h1 className="header__site-title">
        <a href="/">ProDobro</a>
      </h1>
      <div id="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
);
