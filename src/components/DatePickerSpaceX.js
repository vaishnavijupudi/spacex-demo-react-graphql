import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerSpaceX = ({ label, value, onChange }) => {

  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      inputVariant="outlined"
    />
  );
}

export default DatePickerSpaceX
