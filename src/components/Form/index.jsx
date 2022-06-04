//import { useState } from 'react/cjs/react.production.min';

import React from 'react';
import './style.css';
import { Formik } from 'formik';
import { AuctionDateTimePicker } from '../fields/AuctionDateTimePicker';
import { getDatabase, query, ref, push, set } from 'firebase/database';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const db = getDatabase(app);

const auctionRef = query(ref(db, 'auctions'));

export const Form = () => {
  const navigate = useNavigate();
  const createAuction = (data) => {
    const pushRef = push(auctionRef);
    const promise = set(pushRef, data);
    promise
      .then(() => {
        navigate(`/auctions/${pushRef.key}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div>
        <h2>Založení dobročinné aukce</h2>
        <Formik
          initialValues={{
            jmeno: '',
            prijmeni: '',
            nazev: '',
            popis: '',
            problem: '',
            pouziti: '',
            cena: 1,
            souhlas: false,
          }}
          onSubmit={(values, { setSubmitting }) => {
            const novyCas = values.cas.map((date) => date.getTime());
            const noveValues = {
              ...values,
              cas: novyCas,
              casVytvoreni: new Date().getTime(),
            };
            createAuction(noveValues);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="form" onSubmit={handleSubmit}>
              <label className="form__zakladatel">Zakladatel</label>
              <label className="form__jmeno-label" for="jmeno">
                Jméno
              </label>
              <input
                className="form__jmeno-input"
                id="jmeno"
                type="text"
                name="jmeno"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jmeno}
              />
              <label className="form__prijmeni-label" for="prijmeni">
                Příjmení{' '}
              </label>
              <input
                className="form__prijmeni-input"
                id="prijmeni"
                type="text"
                name="prijmeni"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prijmeni}
              />
              <label className="form__aukce">Aukce</label>
              <label className="form__nazev-label" for="nazev">
                Název aukce
              </label>
              <input
                className="form__nazev-input"
                id="nazev"
                type="text"
                name="nazev"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nazev}
              />
              {/* <input type="text" name="auctionName" /> */}
              <label className="form__predmet-label" for="predmet">
                Předmět dražby{' '}
              </label>
              <input
                className="form__predmet-input"
                id="predmet"
                type="file"
                placeholder="Nahrát fotografie"
              />
              <label className="form__posudek-label" for="posudek">
                Znalecký posudek
              </label>
              <input className="form__popis-input" id="posudek" type="file" />
              <label className="form__popis-label" for="popis">
                Popis předmětu{' '}
              </label>
              <input
                className="form__popis-input"
                id="popis"
                type="text"
                name="popis"
                placeholder="O jaký předmět se jedná? Jaké je jeho stáří? Jedná se o originál?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.popis}
              />
              <label className="form__problem-label" for="problem">
                Komu{' '}
              </label>
              <input
                className="form__problem-input"
                id="problem"
                type="text"
                name="problem"
                placeholder="Zde se, prosím, více rozepište.  O jaký problém se jedná? Jaký byl vývoj a jaký je stav nyní?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.problem}
              />
              <div />
              <label className="form__pouziti-label" for="pouziti">
                Výtěžek z aukce
              </label>
              <input
                className="form__pouziti-input"
                id="pouziti"
                type="text"
                name="pouziti"
                placeholder="Jak konkrétně bude výtěžek z aukce použit? V čem to obdarovanému pomůže?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pouziti}
              />
              <label className="form__cena-label" for="cena">
                Vyvolávací cena{' '}
              </label>
              <input
                className="form__cena-input"
                id="cena"
                type="number"
                min="1"
                name="cena"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cena}
              />
              <label className="form__timer-label" for="timer">
                Doba trvání aukce
              </label>
              <div className="form__timer-picker">
                <AuctionDateTimePicker name={'cas'} />
              </div>
              <label className="form__souhlas-label" for="souhlas">
                Souhlasím se zpracováním osobních údajů a s obchodními
                podmínkami ProDobro{' '}
              </label>
              {/* Checkbox to submit information */}
              <input
                className="form__souhlas-input"
                id="souhlas"
                name="souhlas"
                type="checkbox"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.souhlas}
              />
              {/* <input type="submit" value="submit" /> */}
              <button className="home__btn"> Založit aukci</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
