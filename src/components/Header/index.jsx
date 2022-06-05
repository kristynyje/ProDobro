import React from 'react';
import './style.css';

export const Header = ({ user, onSignOut }) => {
  return (
    <header>
      <div className="header__container">
        <h1 className="header__site-title">
          <a href="/">ProDobro</a>
        </h1>
        <div id="navMenu">
          {user && (
            <div className="header__user">
              {user.displayName}{' '}
              <button className="header__user-btn" onClick={onSignOut}>
                Odhlásit
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
