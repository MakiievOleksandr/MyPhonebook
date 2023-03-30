import PropTypes from 'prop-types';

import { useState } from 'react';

import TextField from 'components/shared/components/TextField/TextField';
import initialState from './initialState';

import css from './contacts-form.module.scss';
import { Button } from '@mui/material';

const ContactForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...formState });
    // console.log('formState:', formState);
    setFormState({ ...initialState });
  };

  const { name, number } = formState;

  return (
    <form className={css.form}>
      <label className={css.label}>
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        <TextField
          type="tel"
          name="number"
          placeholder="Phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
