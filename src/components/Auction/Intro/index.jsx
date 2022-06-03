import React from 'react';
import Corvette from '/src/components/Auction/auto.jpeg';

import './style.css';

export const Intro = () => (
  <>
    <img
      className="intro__pic-item1"
      alt="Děd s corvettou"
      width="100%"
      src={Corvette}
    />
    <div className="intro__creator-info">
      <p id="creator">Karel Okurka</p>
      <p id="added">20. 5. 2022</p>
    </div>{' '}
  </>
);
