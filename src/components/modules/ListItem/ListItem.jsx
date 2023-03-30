import PropTypes from 'prop-types';

import { List, SvgIcon } from '@mui/material';
import { Edit } from '@mui/icons-material';

import AlertDialog from 'components/shared/components/Dialog/Dialog';

import { Person, Phone } from '@mui/icons-material';
import css from './list-item.module.scss';

function MyListItem({ onDeleteContact, onEditContact, contact }) {
  return (
    <List className={css.listItem}>
      <p className={css.text}>
        <span className={css.contactField}>
          <SvgIcon sx={{ fontSize: 15 }}>
            <Person />
          </SvgIcon>
          <span className={css.data}>{contact.name}</span>
        </span>
        <span className={css.contactField}>
          <SvgIcon
            sx={{
              fontSize: 15,
            }}
          >
            <Phone />
          </SvgIcon>
          <span className={css.data}>{contact.number}</span>
        </span>
      </p>
      <div>
        <AlertDialog onDeleteContact={onDeleteContact} contact={contact} />
        <button
          className={css.editBtn}
          type="button"
          onClick={function () {
            onEditContact(contact.id);
          }}
        >
          <SvgIcon
            sx={{
              fontSize: 16,
              color: 'green',
            }}
          >
            <Edit />
          </SvgIcon>
        </button>
      </div>
    </List>
  );
}

export default MyListItem;

MyListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
