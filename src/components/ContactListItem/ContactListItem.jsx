import { Contact, Button, ContactName } from './ContactListItem.styled';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { dellContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactListItem = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterValue)
  );

  return filteredContacts.map(contact => {
    return (
      <Contact key={contact.id}>
        <AiOutlineUser size={20} />
        <ContactName>
          {contact.name}: {contact.number}
        </ContactName>
        <Button type="button" onClick={() => dispatch(dellContact(contact.id))}>
          Delete
        </Button>
      </Contact>
    );
  });
};
