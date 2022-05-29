import React from 'react';
import { Link } from 'react-router-dom';
import HomePic from '/src/components/Home/pic_home.png';
import './style.css';

export const Home = () => {
  return (
    <>
      {' '}
      <div className="home__container">
        <img
          className="pic__home"
          src={HomePic}
          alt="veselý člověk s notebookem"
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
