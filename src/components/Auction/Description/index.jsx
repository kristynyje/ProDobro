import React from 'react';
import './style.css';

export const Description = ({ data: { popis, pouziti, problem } }) => (
  <div className="description__container">
    <h3 className="description__h">Popis předmětu</h3>
    <p className="description__text">{popis}</p>
    <h3 className="description__h">Popis situace</h3>
    <p className="description__text">{problem}</p>
    <p className="description__text">{pouziti}</p>
  </div>
);
