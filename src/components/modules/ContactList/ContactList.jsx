import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import MyListItem from 'components/modules/ListItem/ListItem';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';

import css from './contact-list.module.scss';

function ContactList({ onDeleteContact, onEditContact }) {
  const visible = useSelector(getfilteredContacts);

  return (
    <ul className={css.list}>
      {visible.map(contact => {
        return (
          <MyListItem
            onEditContact={onEditContact}
            onDeleteContact={onDeleteContact}
            contact={contact}
            key={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
