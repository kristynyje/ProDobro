import React from 'react';
import Bidding from '/src/components/Home/unified-bidding.svg';
import { Link } from 'react-router-dom';
import './style.css';

/* vybrat obrázek/koupit bez vodoznaku !!! */

export const Home = () => {
  return (
    <>
      {' '}
      <div className="home__container">
        <img
          className="pic__home"
          src={Bidding}
          alt="lidé přihazující při online aukci"
        />
        <div className="home__text">
          <h2>Udělat něco pro dobro trvá jenom pár minut.</h2>
          <p>
            {' '}
            Založit si u nás aukci je jednoduché. Po přihlášení vyplníte uvedený
            formulář a aukci můžete hned sdílet.
          </p>

          <Link to="/Form">
            <button className="home__btn"> Založit aukci</button>
          </Link>
        </div>
      </div>
    </>
  );
};
