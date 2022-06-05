import React, { useEffect, useState, useMemo } from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import { isImage } from '../../../utils/isImage';

const emptyArray = [];

export const Intro = ({
  data: {
    jmeno,
    prijmeni,
    casVytvoreni,
    fotkyPredmetu = emptyArray,
    fotkyProblemu = emptyArray,
    znaleckePosudky = emptyArray,
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

  const validImages = urls.filter(isImage);
  const documents = urls.filter((url) => !isImage(url));

  return (
    <>
      {' '}
      <Carousel>
        {validImages.map((path, i) => (
          <div key={i}>
            <img className="intro__pic-item1" width="100%" src={path} />
          </div>
        ))}
      </Carousel>
      <div>
        {documents.map((path, i) => (
          <div key={i}>
            <a className="intro__doc-item1" href={path}>
              Dokument {i + 1}
            </a>
          </div>
        ))}
      </div>
      <div className="intro__creator-info">
        <p id="creator">
          {jmeno} {prijmeni}
        </p>
        <p id="added">{dateObject.toLocaleDateString()}</p>
      </div>{' '}
    </>
  );
};
