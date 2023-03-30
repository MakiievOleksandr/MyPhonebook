import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import MyTextField from 'components/shared/components/TextField/TextField';
import EditDialog from 'components/shared/components/EditDialog/EditDialog';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getfilteredContacts } from 'redux/contacts/contacts-selectors';
import initialState from './initialState';

import css from './edit-contact.module.scss';

const EditContact = ({ data, onSubmit }) => {
  const contacts = useSelector(getfilteredContacts);
  const [contactData, setContactData] = useState({ ...initialState });

  useEffect(() => {
    contacts.filter(item => {
      if (item.id === data) {
        setContactData(item);
      }
      return item;
    });
  }, [contacts, data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContactData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...contactData }); //всі дані контакта (id, name, number)
    setContactData({ ...initialState });
    Notify.success('Changes was successfully saved!');
  };

  const { name, number } = contactData;

  return (
    <form className={css.form}>
      <label className={css.label}>
        <MyTextField
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
        <MyTextField
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

      <EditDialog onSubmit={handleSubmit} title="Save" children />
    </form>
  );
};

export default EditContact;
