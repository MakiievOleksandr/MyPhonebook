// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import AdditionalFields from 'components/AdditionalFields/AdditionalFields';

import css from '../ContactForm/contact.module.css';
import initialState from './initialState';

const ContactForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({ ...initialState });
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState(prevState => {
      return { ...prevState, [name]: value, id: nanoid() };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...formState });
    setFormState({ ...initialState });
    setToggleBtn(false);
  };

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  const { name, number, email, note } = formState;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <input
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      {toggleBtn !== false && (
        <AdditionalFields
          handleChange={handleChange}
          email={email}
          note={note}
        />
      )}
      <div className={css.btnWrap}>
        <button type="button" onClick={handleToggle} className={css.btn}>
          {toggleBtn === false ? 'More' : 'Less'}
        </button>
        {name && (
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };
