import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: nanoid(), name: 'Learn HTML and CSS', number: 123123 },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    dellContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, dellContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
