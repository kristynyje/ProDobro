import React from 'react';
import './style.css';
import { Intro } from './Intro';
import { Heading } from './Heading';
import { Amount } from './Amount';
import { Description } from './Description';
import { Chat } from './Chat';
import { getDatabase, query, ref, onValue, child } from 'firebase/database';
import { app } from '../../firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const db = getDatabase(app);

export const Auction = () => {
  const [auction, setAuction] = useState();
  const { idAukce } = useParams();

  const auctionRef = query(ref(db, `auctions/${idAukce}`));
  const chatRef = child(auctionRef, 'chat');
  const amountRef = child(auctionRef, 'amount');
  useEffect(
    () =>
      onValue(auctionRef, (snapshot) => {
        setAuction(snapshot.val());
      }),
    [],
  );

  return (
    auction && (
      <div className="auction__container">
        <div className="auction__subcontainer auction__subcontainer-heading">
          <Heading data={auction} />
        </div>
        <div className="auction__subcontainer auction__subcontainer-intro">
          <Intro data={auction} />
        </div>
        <div className="auction__subcontainer auction__subcontainer-amount">
          <Amount amountRef={amountRef} data={auction} />
        </div>
        <div className="auction__subcontainer auction__subcontainer-description">
          <Description data={auction} />
        </div>

        <div className="auction__subcontainer auction__subcontainer-chat">
          <Chat chatRef={chatRef} />
        </div>
      </div>
    )
  );
};
