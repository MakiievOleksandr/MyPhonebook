import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from '../ListItem/listItem.module.css';

function ListItem({ onDeleteContact, contact }) {
  const { name, number, email, note } = contact;
  return (
    <li key={nanoid()} className={css.listItem}>
      <div className={css.textWrap}>
        <p className={css.text}>
          {name}
          <br />
          {number}
        </p>
        <p className={css.text}>{email}</p>
        <p className={css.text}>{note}</p>
      </div>
      <div className={css.btnWrap}>
        <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
          className={css.btn}
        >
          Delete
        </button>
        <button className={css.btn}>edit</button>
        <button className={css.btn}>favorite</button>
      </div>
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
