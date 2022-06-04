import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import { useField } from 'formik';
import React from 'react';

export const AuctionDateTimePicker = ({ name }) => {
  const [field, _, helpers] = useField(name);
  const handleChange = (value) => {
    helpers.setValue(value);
  };
  return <DateTimeRangePicker onChange={handleChange} value={field.value} />;
};
