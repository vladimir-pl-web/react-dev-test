import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { contactsReducer } from './contacts/contactsReducer';
import { contactsActionsType } from './contacts/types';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunk = ThunkDispatch<RootStateType, unknown,contactsActionsType>