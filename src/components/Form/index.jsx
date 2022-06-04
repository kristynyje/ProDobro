//import { useState } from 'react/cjs/react.production.min';

import React from 'react';
import './style.css';
import { Formik } from 'formik';
import { AuctionDateTimePicker } from '../fields/AuctionDateTimePicker';
import { getDatabase, query, ref, push, set } from 'firebase/database';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { UploadField } from './UploadField';
import { AuctionInput } from './AuctionInput';
import * as Yup from 'yup';

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
  const auctionSchema = Yup.object().shape({
    jmeno: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    prijmeni: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    nazev: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    popis: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    problem: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    pouziti: Yup.string()
      .min(2, 'Příliš krátké!')
      .max(100, 'Too Long!')
      .required('Required'),
    cas: Yup.array()
      .length(2, 'Zadejte časy!')
      .of(Yup.date())
      .required('Required'),
  });

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
          validationSchema={auctionSchema}
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
              <label className="form__jmeno-label" htmlFor="jmeno">
                Jméno
              </label>
              <AuctionInput
                className="form__jmeno-input"
                id="jmeno"
                type="text"
                name="jmeno"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jmeno}
              />
              <label className="form__prijmeni-label" htmlFor="prijmeni">
                Příjmení{' '}
              </label>
              <AuctionInput
                className="form__prijmeni-input"
                id="prijmeni"
                type="text"
                name="prijmeni"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prijmeni}
              />
              <label className="form__aukce">Aukce</label>
              <label className="form__nazev-label" htmlFor="nazev">
                Název aukce
              </label>
              <AuctionInput
                className="form__nazev-input"
                id="nazev"
                type="text"
                name="nazev"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nazev}
              />
              {/* <AuctionInput type="text" name="auctionName" /> */}
              <label className="form__predmet-label" htmlFor="predmet">
                Předmět dražby{' '}
              </label>
              <div className="form__predmet-upload">
                <UploadField name="fotkyPredmetu" />
              </div>
              <label className="form__posudek-label" htmlFor="posudek">
                Znalecký posudek
              </label>
              <div className="form__posudek-upload">
                <UploadField name="znaleckePosudky" />
              </div>{' '}
              <label className="form__popis-label" htmlFor="popis">
                Popis předmětu{' '}
              </label>
              <AuctionInput
                className="form__popis-input"
                id="popis"
                type="text"
                name="popis"
                placeholder="O jaký předmět se jedná? Jaké je jeho stáří? Jedná se o originál?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.popis}
              />
              <label className="form__problem-label" htmlFor="problem">
                Komu pomůžeme{' '}
              </label>
              <AuctionInput
                className="form__problem-input"
                id="problem"
                type="text"
                name="problem"
                placeholder="Zde se, prosím, více rozepište.  O jaký problém se jedná? Jaký byl vývoj a jaký je stav nyní?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.problem}
              />
              <div className="form__fotky-problemu-upload">
                <UploadField name="fotkyProblemu" />
              </div>
              <label className="form__pouziti-label" htmlFor="pouziti">
                Výtěžek z aukce
              </label>
              <AuctionInput
                className="form__pouziti-input"
                id="pouziti"
                type="text"
                name="pouziti"
                placeholder="Jak konkrétně bude výtěžek z aukce použit? V čem to obdarovanému pomůže?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pouziti}
              />
              <label className="form__cena-label" htmlFor="cena">
                Vyvolávací cena{' '}
              </label>
              <AuctionInput
                className="form__cena-input"
                id="cena"
                type="number"
                min="1"
                name="cena"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cena}
              />
              <label className="form__timer-label" htmlFor="timer">
                Doba trvání aukce
              </label>
              <div className="form__timer-picker">
                <AuctionDateTimePicker name={'cas'} />
              </div>
              <label className="form__souhlas-label" htmlFor="souhlas">
                Souhlasím se zpracováním osobních údajů a s obchodními
                podmínkami ProDobro{' '}
              </label>
              {/* Checkbox to submit information */}
              <AuctionInput
                className="form__souhlas-input"
                id="souhlas"
                name="souhlas"
                type="checkbox"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.souhlas}
              />
              {/* <AuctionInput type="submit" value="submit" /> */}
              <button className="home__btn"> Založit aukci</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
