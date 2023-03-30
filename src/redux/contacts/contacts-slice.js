import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const idx = store.items.findIndex(item => item.id === payload);
        store.items.splice(idx, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchEditContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchEditContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const idx = store.items.findIndex(item => item.id === payload.id);
        store.items.splice(idx, 1);
        store.items.push(payload);
      })
      .addCase(fetchEditContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
