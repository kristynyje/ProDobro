import React from 'react';
import './style.css';
import { Intro } from './Intro';
import { Heading } from './Heading';
import { Amount } from './Amount';
import { Description } from './Description';
import { Chat } from './Chat';

export const Auction = () => (
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
