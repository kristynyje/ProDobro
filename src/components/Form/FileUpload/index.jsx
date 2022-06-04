import React from 'react';
import { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';

export const FileUpload = ({ onUploaded, firebaseApp }) => {
  const [uploading, setUploading] = useState(false);

  const onFilesSelected = (e) => {
    setUploading(true);
    const uploadPromises = [...e.target.files].map((file) => upload(file));
    Promise.all(uploadPromises)
      .then((filePaths) => {
        setUploading(false);
        onUploaded(filePaths);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const upload = (file) => {
    const storage = getStorage(firebaseApp);
    const filename = file.name;
    const filePath = `uploads/${uuid()}/${filename}`;
    const storageRef = ref(storage, filePath);

    return uploadBytes(storageRef, file).then(() => filePath);
  };

  return (
    <div className="upload-field__input-wrapper">
      {uploading ? (
        'Uploading...'
      ) : (
        <input multiple type="file" onChange={onFilesSelected} />
      )}
    </div>
  );
};
