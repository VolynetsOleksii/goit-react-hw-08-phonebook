import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from 'redux/operations';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  
  const handleSubmit = ({ name, phone }) => {
    const newContact = { id: nanoid(), name, phone };
    const checkUser = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? toast.warn(`${name} is already in the contacts`)
      : dispatch(addContactsThunk(newContact));
  };

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };
  return (
    <Container>
      {isLoading && <Loader />}
      {error !== null && <p>Error: {error}</p>}
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <Filter handleChange={handleChange} filter={filter} />
      <ContactsList
        contacts={getFilteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      <ToastContainer />
    </Container>
  );
};
