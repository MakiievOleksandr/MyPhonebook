import { useMemo } from 'react';

import { nanoid } from 'nanoid';

import { TextField } from '@mui/material';
// import css from './text.module.scss';

const MyTextField = ({ label, name, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const inputName = useMemo(() => name || id, [name, id]);

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      variant="filled"
      name={inputName}
      id={id}
      onChange={handleChange}
      {...props}
    />
  );
};

export default MyTextField;
