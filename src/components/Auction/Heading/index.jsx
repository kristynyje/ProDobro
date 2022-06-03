import React from 'react';
import './style.css';
import { BsShare } from 'react-icons/bs';

export const Heading = () => (
  <>
    <div className="heading__site-share">
      <h2 className="heading__site-title">Aukce XY</h2>

      <button className="heading__share-btn">
        {' '}
        <BsShare /> {`Sdílet`.toUpperCase()}
      </button>
    </div>
    <div className="heading__timekeeper">
      <p className="heading__timekeeper-text">
        0 dní 10 hodin 15 minut 43 sekund do konce
      </p>
    </div>
  </>
);
