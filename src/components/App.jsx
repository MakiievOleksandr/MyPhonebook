import { useState, useEffect } from 'react';

import Section from './Section/Secton';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? '';
  });
  const [filterContacts, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contactData => {
    if (contacts.length > 0) {
      contacts.find(item => item.name === contactData.name)
        ? alert(`${contactData.name} is already in contacts!`)
        : setContacts(prevContacts => [contactData, ...prevContacts]);
      return;
    }
    setContacts(prevContacts => [contactData, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setFilter('');
  };

  const getVisibleContacts = () => {
    if (!filterContacts) {
      return contacts;
    }
    const normalizedFilter = filterContacts.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter filter={filterContacts} onChangeFilter={changeFilter} />
          <ContactList
            onVisibleContacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      )}
    </>
  );
};

export default App;
