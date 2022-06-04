import React, { useEffect, useState } from 'react';
import './style.css';
import { BsShare } from 'react-icons/bs';
import { format, formatDistance, intervalToDuration } from 'date-fns';
import { formatDuration } from '../../../utils/formatDuration';
import copy from 'copy-to-clipboard';

export const Heading = ({ data: { nazev, cas } }) => {
  const [start, end] = cas;

  const [title, setTitle] = useState('');
  const [shared, setShared] = useState(false);

  const updateTitle = () => {
    const didAuctionStart = start < Date.now();
    const didAuctionEnd = end < Date.now();
    let duration = null;
    if (!didAuctionStart) {
      duration = intervalToDuration({ start: Date.now(), end: start });
    } else if (!didAuctionEnd) {
      duration = intervalToDuration({ start: Date.now(), end: end });
    }
    if (duration) {
      setTitle(formatDuration(duration, didAuctionStart));
    } else {
      setTitle('Aukce skončila');
    }
  };

  useEffect(() => {
    updateTitle();
    const timer = setInterval(updateTitle, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleShare = () => {
    copy(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 4000);
  };
  return (
    <>
      <div className="heading__site-share">
        <h2 className="heading__site-title">{nazev}</h2>
        {shared ? (
          <div>Zkopírováno do schránky</div>
        ) : (
          <button className="heading__share-btn" onClick={handleShare}>
            {' '}
            <BsShare /> {`Sdílet`.toUpperCase()}
          </button>
        )}
      </div>
      <div className="heading__timekeeper">
        <p className="heading__timekeeper-text">{title}</p>
      </div>
    </>
  );
};
