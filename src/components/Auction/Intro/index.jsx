import React from 'react';
import Corvette from '/src/components/Auction/auto.jpeg';

import './style.css';

export const Intro = ({ data: { jmeno, prijmeni, casVytvoreni } }) => {
  const dateObject = new Date(casVytvoreni);
  return (
    <>
      <img
        className="intro__pic-item1"
        alt="Děd s corvettou"
        width="100%"
        src={Corvette}
      />
      <div className="intro__creator-info">
        <p id="creator">
          {jmeno} {prijmeni}
        </p>
        <p id="added">{dateObject.toLocaleDateString()}</p>
      </div>{' '}
    </>
  );
};
