import React, { useEffect, useState, useMemo } from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

export const Intro = ({
  data: {
    jmeno,
    prijmeni,
    casVytvoreni,
    fotkyPredmetu,
    fotkyProblemu,
    znaleckePosudky,
  },
}) => {
  const storage = getStorage();
  const allImages = useMemo(
    () => [...fotkyPredmetu, ...fotkyProblemu, ...znaleckePosudky],
    [fotkyPredmetu, fotkyProblemu, znaleckePosudky],
  );
  const dateObject = new Date(casVytvoreni);
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    Promise.all(allImages.map((url) => getDownloadURL(ref(storage, url)))).then(
      (urls) => {
        console.log(urls);
        setUrls(urls);
      },
    );
  }, [allImages]);

  return (
    <>
      {' '}
      <Carousel>
        {urls.map((path, i) => (
          <div key={i}>
            <img
              className="intro__pic-item1"
              alt="Děd s corvettou"
              width="100%"
              src={path}
            />
          </div>
        ))}
      </Carousel>
      <div className="intro__creator-info">
        <p id="creator">
          {jmeno} {prijmeni}
        </p>
        <p id="added">{dateObject.toLocaleDateString()}</p>
      </div>{' '}
    </>
  );
};
