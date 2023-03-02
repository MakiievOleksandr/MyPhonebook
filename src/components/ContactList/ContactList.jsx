import PropTypes from 'prop-types';

import ListItem from 'components/ListItem/ListItem';

import css from '../ContactList/contactList.module.css';

function ContactList({ onDeleteContact, onVisibleContacts }) {
  return (
    <ul className={css.list}>
      {onVisibleContacts.map(contact => {
        return (
          <ListItem
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
  onVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
