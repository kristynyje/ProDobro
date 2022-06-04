import { ImEye } from 'react-icons/im';
import { GiPayMoney } from 'react-icons/gi';
import React from 'react';
import './style.css';

export const Amount = () => (
  <>
    <h3 className="amount__h">Aktuální částka</h3>
    <div className="amount__price-container">
      <p className="amount__price-now"> 155 569 Kč</p>
      <div className="amount__bid">
        <div className="amount__price-thingie">
          <input type="range" id="Kc" name="Kc"></input>
          <label> Kč</label>{' '}
        </div>
        <span>
          <button className="amount__bid-btn">
            {'Přihodit'.toUpperCase()}
          </button>
        </span>
      </div>
    </div>
    <div className="amount__ppl-stats">
      <div className="amount__pplwatching-container">
        <ImEye /> <p className="amount__pplwatching"> sleduje 255 lidí</p>
      </div>
      <div className="amount__pplbidding-container">
        <GiPayMoney />
        <p className="amount__pplbidding"> přihazuje 25 lidí</p>
      </div>
    </div>
  </>
);
