import { ImEye } from 'react-icons/im';
import { GiPayMoney } from 'react-icons/gi';
import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { push, set, onValue } from 'firebase/database';
import { formatNumber } from '../../../utils/formatNumber';
import { auth } from '../../../firebase';

export const Amount = ({ amountRef, data: { cena, cas } }) => {
  const [start, end] = cas;

  const baseAmount = cena;
  const [currentAmount, setCurrentAmount] = useState(baseAmount);
  const [bidders, setBidders] = useState(0);
  const [active, setActive] = useState(false);

  const updateState = () => {
    const didAuctionStart = start < Date.now();
    const didAuctionEnd = end < Date.now();
    setActive(didAuctionStart && !didAuctionEnd);
  };

  useEffect(() => {
    updateState();
    const timer = setInterval(updateState, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(
    () =>
      onValue(amountRef, (snapshot) => {
        const uniqueEmails = new Set();
        let amount = baseAmount;
        snapshot.forEach((item) => {
          amount += item.val().amount;
          uniqueEmails.add(item.val().user);
        });
        setCurrentAmount(amount);
        setBidders(uniqueEmails.size);
      }),
    [],
  );
  const [amount, setAmount] = useState(1000);
  const sendBid = () => {
    const pushRef = push(amountRef);
    set(pushRef, {
      amount,
      time: Date.now(),
      user: auth.currentUser.email,
    }).then(() => {
      setAmount(1000);
      alert(`Úspěšně přihozeno ${formatNumber(amount)} Kč!`);
    });
  };

  return (
    <>
      <h3 className="amount__h">Aktuální částka</h3>
      <div className="amount__price-container">
        <p className="amount__price-now"> {formatNumber(currentAmount)} Kč</p>
        <div className="amount__bid">
          <div className="amount__price-thingie">
            <input
              id="slider"
              type="range"
              min={1000}
              max={100000}
              step={100}
              value={amount}
              disabled={!active}
              onChange={(e) => setAmount(Number(e.target.value))}
            ></input>
            <label className="amount__price-label">
              {' '}
              {formatNumber(amount)} Kč
            </label>{' '}
          </div>

          <span>
            <button
              className="amount__bid-btn"
              onClick={sendBid}
              disabled={!active}
            >
              {'Přihodit'.toUpperCase()}
            </button>
          </span>
        </div>
      </div>
      <div className="amount__ppl-stats">
        <div className="amount__pplbidding-container">
          <GiPayMoney />
          <p className="amount__pplbidding"> přihazuje {bidders}</p>
        </div>
      </div>
    </>
  );
};
