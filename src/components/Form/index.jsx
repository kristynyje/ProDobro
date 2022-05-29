//import { useState } from 'react/cjs/react.production.min';

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import DatePicker from 'react-date-picker';

export const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h2>Založení dobročinné aukce</h2>
      <form
        onSubmit={() => {
          console.log('Test');
        }}
      >
        <label>
          Zakladatel
          <div>
            <label>
              Jméno
              <input id="jmeno-prijmeni" type="text" name="auctionName" />
            </label>
            <label>
              Příjmení
              <input id="jmeno-prijmeni" type="text" name="auctionName" />
            </label>
          </div>
        </label>
        <label>
          Aukce
          <div>
            <label>
              Název aukce
              <select>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>
              {/* <input type="text" name="auctionName" /> */}
            </label>
          </div>
        </label>
        <label>
          Předmět dražby
          <input
            className="chooseFile"
            type="file"
            placeholder="Nahrát fotografie"
          />
        </label>
        <label>
          Znalecký posudek
          <input className="chooseFile" type="file" />
        </label>
        <label id="explanation">
          Popis předmětu
          <input
            id="description"
            type="text"
            name="auctionName"
            placeholder="O jaký předmět se jedná? Jaké je jeho stáří? Jedná se o originál?"
          />
        </label>
        <label id="explanation">
          Komu pomůžeme
          <input
            id="description"
            type="text"
            name="auctionName"
            placeholder="Zde se, prosím, více rozepište.  O jaký problém se jedná? Jaký byl vývoj a jaký je stav nyní?"
          />
          <input type="file" />
        </label>
        <label id="explanation">
          Výtěžek z aukce
          <input
            id="description"
            type="text"
            name="auctionName"
            placeholder="Jak konkrétně bude výtěžek z aukce použit? V čem to obdarovanému pomůže?"
          />
        </label>
        <label>
          Doba trvání aukce
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </label>
        <label id="checkbox">
          <p>
            Souhlasím se zpracováním osobních údajů a s obchodními podmínkami
            ProDobro
          </p>

          {/* Checkbox to submit information */}
          <input type="checkbox" />
        </label>
        {/* <input type="submit" value="submit" /> */}

        <Link to="/Auction">
          <button className="home__btn"> Založit aukci</button>
        </Link>
      </form>
    </>
  );
};
