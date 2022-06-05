import parseWithOptions from 'date-fns/fp/parseWithOptions/index.js';
import React from 'react';
import { useField } from 'formik';

export const AuctionInput = ({ name, className, ...inputProps }) => {
  const [field, meta, helpers] = useField(name);

  const isError = meta.error && meta.touched;

  return (
    <div className={className}>
      <input
        {...inputProps}
        name={name}
        className={isError ? 'auction-input__input--error' : ''}
      />
      {isError && <div className="auction-input__error">{meta.error}</div>}
    </div>
  );
};
