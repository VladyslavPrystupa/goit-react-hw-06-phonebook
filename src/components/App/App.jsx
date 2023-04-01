import { GlobalStyles } from '../App/GlobalStyles';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Header, SubHeader } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <GlobalStyles />
      <Header>Phonebook</Header>
      <ContactForm />
      {contacts.length !== 0 ? (
        <>
          <SubHeader>Contacts</SubHeader>
          <Filter />
          <ContactList />
        </>
      ) : (
        <SubHeader>You have not any contacts</SubHeader>
      )}
    </Container>
  );
};
