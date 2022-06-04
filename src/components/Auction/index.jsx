import React from 'react';
import './style.css';
import { Intro } from './Intro';
import { Heading } from './Heading';
import { Amount } from './Amount';
import { Description } from './Description';
import { Chat } from './Chat';
import { getDatabase, query, ref, onValue } from 'firebase/database';
import { app } from '../../firebase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const db = getDatabase(app);

export const Auction = () => {
  const { idAukce } = useParams();
  const auctionRef = query(ref(db, `auctions/${idAukce}`));

  useEffect(
    () =>
      onValue(auctionRef, (snapshot) => {
        console.log(snapshot.val());
      }),
    [],
  );

  return (
    <div className="auction__container">
      <div className="auction__subcontainer auction__subcontainer-heading">
        <Heading />
      </div>
      <div className="auction__subcontainer auction__subcontainer-intro">
        <Intro />
      </div>
      <div className="auction__subcontainer auction__subcontainer-amount">
        <Amount />
      </div>
      <div className="auction__subcontainer auction__subcontainer-description">
        <Description />
      </div>

      <div className="auction__subcontainer auction__subcontainer-chat">
        <Chat />
      </div>
    </div>
  );
};
