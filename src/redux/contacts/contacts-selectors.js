export const getfilteredContacts = ({ contacts, filter }) => {
  const copySortArr = [...contacts.items];
  const sortedContacts = copySortArr.sort((a, b) => {
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

  if (!filter) {
    return sortedContacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return sortedContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
