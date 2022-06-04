import React from 'react';
import { app } from '../../../firebase';
import { FileUpload } from '../FileUpload';
import { UploadedFiles } from '../UploadedFiles';
import { useField } from 'formik';

export const UploadField = ({ name }) => {
  const [field, _, helpers] = useField(name);

  return (
    <div className="upload-field">
      <FileUpload
        firebaseApp={app}
        onUploaded={(newUploaded) =>
          helpers.setValue([...(field.value || []), ...newUploaded])
        }
      />

      <UploadedFiles files={field.value || []} />
    </div>
  );
};
