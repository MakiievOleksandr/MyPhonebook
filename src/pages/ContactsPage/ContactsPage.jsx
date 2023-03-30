import Contacts from 'components/modules/Contacts/Contacts';
import css from './contacts-page.module.scss';

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <Contacts />;
    </div>
  );
};

export default ContactsPage;
