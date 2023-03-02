import { useState, useEffect } from 'react';

import Section from '../Section/Secton';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import Modal from 'components/shared/sharedComponents/Modal/Modal';

const Main = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? '';
  });
  const [filterContacts, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

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

  const sortedContacts = visibleContacts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter filter={filterContacts} onChangeFilter={changeFilter} />
          <ContactList
            onVisibleContacts={sortedContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      )}
      <Modal></Modal>
    </>
  );
};

export default Main;
