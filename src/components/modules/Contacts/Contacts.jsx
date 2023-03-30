import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import EditContact from '../EditContact/EditContact';
// import MediaQuery from 'components/shared/BreakePoint/BreakePoint';
import BasicModal from 'components/shared/components/Modal/Modal';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import { IconButton } from '@mui/material';
import { PersonSearchRounded, PersonAddRounded } from '@mui/icons-material';
import css from './contacts.module.scss';

const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [addContactBtn, setAddContactBtn] = useState(false);
  const [filterField, setFilterField] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [dataForEdit, setDataForEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = contactData => {
    dispatch(fetchAddContact(contactData));
    setAddContactBtn(false);
  };

  const onDeleteContact = contactId => {
    dispatch(fetchDeleteContact(contactId));
    const action = setFilter('');
    dispatch(action);
    Notify.success('Contact was successfully deleted!');
  };

  const changeFilter = ({ target }) => {
    const { value } = target;
    const action = setFilter(value);
    dispatch(action);
  };

  const handleAddContactBtn = () => {
    setAddContactBtn(!addContactBtn);
  };

  const handleFilterField = () => {
    setFilterField(!filterField);
  };

  const handleOpenEditForm = data => {
    setOpenEdit(false);
    setDataForEdit(data);

    filteredContacts.filter(contact => {
      const { id } = contact;
      if (id === data) {
        setOpenEdit(!openEdit);
        return contact;
      }
      return 'fail';
    });
  };

  const handleEditContact = contactId => {
    dispatch(fetchEditContact(contactId));
    setOpenEdit(false); //із форми редагування приходять всі данні контакта
  };

  return (
    <div className={css.wrapper}>
      <Section
        style={css.secion}
        title="Contacts"
        button={
          <>
            <IconButton
              onClick={handleFilterField}
              color="inherit"

              // children={'Filter'}
            >
              <PersonSearchRounded className={css.icon} />
            </IconButton>

            <IconButton
              onClick={handleAddContactBtn}
              color="inherit"
              // children={'Add new'}
            >
              <PersonAddRounded className={css.icon} />
            </IconButton>
          </>
        }
      >
        <Filter
          filter={filter}
          onChangeFilter={changeFilter}
          setFF={filterField}
        />
        <ContactList
          onDeleteContact={onDeleteContact}
          filteredContacts={filteredContacts}
          onEditContact={handleOpenEditForm}
        />
      </Section>
      <BasicModal
        title={'New contact'}
        onToggle={addContactBtn}
        setHandler={setAddContactBtn}
      >
        <ContactForm onSubmit={onAddContact} />
      </BasicModal>

      <BasicModal
        title={'Edit contact'}
        onToggle={openEdit}
        setHandler={handleOpenEditForm}
      >
        <EditContact data={dataForEdit} onSubmit={handleEditContact} />
      </BasicModal>
    </div>
  );
};

export default Contacts;
