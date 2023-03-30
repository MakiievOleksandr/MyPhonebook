import useForm from 'components/shared/hooks/useForm';
import TextField from 'components/shared/components/TextField/TextField';
import { Button } from '@mui/material';

import initialState from './initialState';
import fields from './fields';

import css from './register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const { name, email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button onClick={handleSubmit}>Sign up</Button>
    </form>
  );
};

export default RegisterForm;
