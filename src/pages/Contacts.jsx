import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { nanoid } from 'nanoid';


import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import { useEffect } from 'react';

import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from 'redux/contacts/operations';
import { Container } from 'components/Container/Container.styled';
import { ContactsList } from 'components/Contacts/ContactList';

export const Contacts = () => {
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