import React from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { isImage } from '../../../utils/isImage';

export const UploadedFiles = ({ files }) => {
  return (
    <>
      {files.map((path) => (
        <FileItem key={path} path={path} />
      ))}
    </>
  );
};

const FileItem = ({ path }) => {
  const [url, setUrl] = useState();
  const storage = getStorage();
  useEffect(() => {
    getDownloadURL(ref(storage, path)).then((url) => {
      setUrl(url);
    });
  }, [url]);

  return (
    <div className="upload-field__polozka">
      {url ? (
        isImage(path) ? (
          <img src={url} alt="Uploaded file" />
        ) : (
          path
        )
      ) : (
        <>Loading</>
      )}
    </div>
  );
};
