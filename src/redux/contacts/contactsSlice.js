import { createSlice } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => 
  builder
  .addCase(fetchContactsThunk.pending, handlePending)
  .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
    state.contacts = payload;
    state.isLoading = false;
  })
  .addCase(fetchContactsThunk.rejected, handleRejected)
  .addCase(addContactsThunk.pending, handlePending)
  .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
    state.contacts = [...state.contacts, payload];
    state.isLoading = false;
  })
  .addCase(deleteContactsThunk.rejected, handleRejected)
  .addCase(deleteContactsThunk.pending, handlePending)
  .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== payload.id
    );
    state.isLoading = false;
  })
  .addCase(addContactsThunk.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;